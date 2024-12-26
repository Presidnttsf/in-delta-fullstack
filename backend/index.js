require("dotenv").config();
var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = Express();
app.use(cors());


const PORT = 5000;
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

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



// post method starts from here

app.use(Express.json()); // Middleware to parse JSON body

// Route to add a user
app.post("/backend/userdb/AddUser", async (req, res) => {
  if (!database) {
    console.error("Database connection not established");
    return res.status(500).send({ message: "Database connection not established" });
  }

  const { name, email, mobile, password, confirmPassword } = req.body;

  // Basic validation (you can enhance this further)
  if (!name || !email || !mobile || !password || !confirmPassword) {
    return res.status(400).send({ message: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).send({ message: "Passwords do not match." });
  }

  try {
    // Check if email already exists
    const existingUser = await database.collection("users").findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User with this email already exists." });
    }

    // Create the new user object
    const newUser = {
      name,
      email,
      mobile,
      password, // In production, make sure to hash the password before saving
      confirmPassword,
    };

    // Insert the new user into the database
    const result = await database.collection("users").insertOne(newUser);

    console.log("User added:", result);
    res.status(201).send({ message: "User added successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});
