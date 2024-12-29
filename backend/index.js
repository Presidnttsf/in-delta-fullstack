//this is all required prerequsite
require("dotenv").config();
const { ObjectId, MongoClient } = require("mongodb"); // Import ObjectId from the MongoDB library
var Express = require("express");
var cors = require("cors");
const multer = require('multer');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = Express();
app.use(cors());

//port and connections
const PORT = process.env.port || 5000;
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
const JWT_SECRET = process.env.JWT_SECRET;

var DATABASENAME = "userdb";
let database;


// connect to mongodb
const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(CONNECTION_STRING);
    database = client.db(DATABASENAME);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process on failure
  }
};



// Start server and initialize database
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectToDatabase();
});


// Middleware to parse JSON body
app.use(Express.json());
app.use("/uploads", Express.static("backend/uploads"));


//to get all users or read
app.get("/backend/userdb/GetUsers", async (req, res) => {
  if (!database) {
    return res.status(500).send({ message: "Database connection not established" });
  }

  try {
    // Extract the 'name' query parameter from the request
    const { name, email } = req.query;

    // Define the filter: if 'name' is provided, filter by name; otherwise, fetch all

    let filter = {}

    if (name) {
      filter.name = { $regex: new RegExp(name, "i") };

    }

    if (email) {

      filter.email = email;
    }


    // Fetch users based on the filter
    const users = await database.collection("users").find(filter).toArray();
    if (users.length === 0) {
      return res.status(404).send({ message: "No users found in the database." });
    }
    console.log("Fetched data:", users);
    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

//to get signle user to show details
app.get("/backend/userdb/GetUserById", async (req, res) => {
  if (!database) {
    return res.status(500).send({ message: "Database connection not established" });
  }

  console.log("requestbyid", req.headers)
  const token = req.headers.authorization?.split(" ")[1];
  console.log("reqbyid", token)
  if (!token) return res.status(401).send({ success: false, message: "Access denied, token missing" });

  try {
    const user = jwt.verify(token, JWT_SECRET);

    // Convert the userId string to an ObjectId
    const filter = { _id: new ObjectId(user.userId) };

    // Fetch the user from the "users" collection
    const users = await database.collection("users").findOne(filter);

    res.status(200).send(users);
  } catch (error) {
    console.log("Errr0", error)
    res.status(403).send({ success: false, message: "Invalid token" });
  }
});

// post method starts from here
// Route to add a user
app.post("/backend/userdb/AddUser", async (req, res) => {
  console.log("POST method running");

  // Check database connection
  if (!database) {
    console.error("Database connection not established");
    return res.status(500).send({ success: false, message: "Database connection not established" });
  }

  const { name, email, mobile, password, confirmPassword } = req.body;
  console.log("Request Body:", req.body);
  // Basic validation
  if (!name || !email || !mobile || !password || !confirmPassword) {
    return res.status(400).send({ success: false, message: "All required fields must be filled." });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).send({ success: false, message: "Passwords do not match." });
  }

  try {
    // Check if email already exists
    const normalizedEmail = email.toLowerCase();
    const existingUser = await database.collection("users").findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).send({ success: false, message: "User with this email already exists." });
    }

    // Hash the password

    const hashedPassword = await bcrypt.hash(password, 10);


    // Create the new user object
    const newUser = {
      name,
      email,
      mobile,
      password: hashedPassword, // Save hashed password
    };

    // Insert the new user into the database
    const result = await database.collection("users").insertOne(newUser);

    console.log("User added:", result);
    res.status(201).send({ success: true, message: "User added successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send({ success: false, message: "Internal Server Error", error: error.message });
  }
});

// Login Endpoint
app.post("/backend/userdb/LoginUser", async (req, res) => {
  console.log("Login route hit");
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ success: false, message: "Email and password are required." });
  }

  try {
    // Normalize email to lowercase
    const normalizedEmail = email.toLowerCase();

    const user = await database.collection("users").findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ success: false, message: "Invalid credentials." });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).send({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ success: false, message: "Internal Server Error", error: error.message });
  }
});

// Middleware to protect routes (optional)
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send({ success: false, message: "Access denied, token missing" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send({ success: false, message: "Invalid token" });
  }
};

// Example Protected Route
app.get("/backend/userdb/ProtectedRoute", authenticateToken, (req, res) => {
  res.status(200).send({ success: true, message: "Welcome to the protected route!" });
});


//to edite user profile
//PUT api to edit user details

app.put("/backend/userdb/UpdateUser", async (req, res) => {
  console.log("PUT method running");

  if (!database) {
    console.error("Database connection not established");
    return res.status(500).send({ success: false, message: "Database connection not established" });
  }

  const { userId, name, email, mobile, password, confirmPassword } = req.body;

  if (!userId) {
    return res.status(400).send({ success: false, message: "User ID is required to update user details." });
  }
  const updateData = {};
  try {
    // Validate email if provided
    if (email) {
      const normalizedEmail = email.toLowerCase();
      const existingUser = await database.collection("users").findOne({ email: normalizedEmail, _id: { $ne: new ObjectId(userId) } });
      if (existingUser) {
        return res.status(400).send({ success: false, message: "Another user with this email already exists." });
      }
      updateData.email = normalizedEmail;
    }

    // Check if passwords match (if provided)
    if (password || confirmPassword) {
      if (!password || !confirmPassword || password !== confirmPassword) {
        return res.status(400).send({ success: false, message: "Passwords do not match or are missing." });
      }
    }

    // Hash the new password if updating

    if (name) updateData.name = name;
    if (email) updateData.email = email.toLowerCase(); // Normalize email
    if (mobile) updateData.mobile = mobile;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
      updateData.confirmPassword = hashedPassword;
    }

    // Check if there's anything to update
    if (Object.keys(updateData).length === 0) {
      return res.status(400).send({ success: false, message: "No fields provided for update." });
    }

    // Perform the update
    const result = await database
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: updateData });

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "User not found." });
    }

    console.log("User updated:", result);
    res.status(200).send({ success: true, message: "User updated successfully." });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send({ success: false, message: "Internal Server Error", error: error.message });
  }
});


// Delete User API
app.delete("/backend/userdb/DeleteUser/:id", async (req, res) => {
  console.log("DELETE method running");

  // Check database connection
  if (!database) {
    console.error("Database connection not established");
    return res.status(500).send({ success: false, message: "Database connection not established" });
  }

  const userId = req.params.id; // Extract the user ID from the route parameters

  if (!userId) {
    return res.status(400).send({ success: false, message: "User ID is required to delete a user." });
  }

  try {
    // Convert the userId string to an ObjectId
    const filter = { _id: new ObjectId(userId) };

    // Delete the user from the "users" collection
    const result = await database.collection("users").deleteOne(filter);

    if (result.deletedCount === 0) {
      return res.status(404).send({ success: false, message: "User not found." });
    }

    console.log("User deleted:", result);
    res.status(200).send({ success: true, message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ success: false, message: "Internal Server Error", error: error.message });
  }
});
