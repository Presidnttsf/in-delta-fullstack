import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Check = () => {
  const [users, setUsers] = useState([]); // State to store fetched data
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading
  const [editUser, setEditUser] = useState(null); // State to track the user being edited
  const [editFormData, setEditFormData] = useState({ name: '', email: '' }); // State for the edit form

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/backend/userdb/getusers');
        setUsers(response.data); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Update state with error message
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once after the component mounts

  // Handle edit button click
  const handleEdit = (user) => {

    setEditUser(user); // Set the user being edited
    setEditFormData({ name: user.name, email: user.email }); // Pre-fill the form with user data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value })); // Update form data
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:5000/backend/userdb/updateUser', {
        userId: editUser._id,
        ...editFormData,
      });
      alert(response.data.message); // Show success message
      // Update the user list
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === editUser._id ? { ...user, ...editFormData } : user
        )
      );
      setEditUser(null); // Close the edit form
    } catch (error) {
      console.error('Error updating user:', error);
      alert(error.response?.data?.message || 'Failed to update user.');
    }
  };

  const handleDelete = async (userId, username) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete user: ${username}?`);
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:5000/backend/userdb/DeleteUser/${userId}`);
        alert(response.data.message); // Show success message
        // Remove the deleted user from the UI
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      } catch (error) {
        console.error('Error deleting user:', error);
        alert(error.response?.data?.message || 'Failed to delete user.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User List</h1>
      <h4 style={styles.header}>Total: {users.length}</h4>
      {editUser && (
        <div style={styles.editForm}>
          <h3>Edit User</h3>
          <input
            type="text"
            name="name"
            value={editFormData.name}
            onChange={handleInputChange}
            placeholder="Name"
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            value={editFormData.email}
            onChange={handleInputChange}
            placeholder="Email"
            style={styles.input}
          />
          <button style={styles.saveButton} onClick={handleUpdate}>
            Save
          </button>
          <button style={styles.cancelButton} onClick={() => setEditUser(null)}>
            Cancel
          </button>
        </div>
      )}

      {loading && <p>Loading...</p>}
      {error && <h1 style={styles.error}>Error: {error}</h1>}
      {!loading && !error && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Sr.No</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>
                  <button style={styles.editButton} onClick={() => handleEdit(user)}>
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png"
                      alt="Edit"
                      style={styles.icon}
                    />
                    Edit
                  </button>
                  <button style={styles.deleteButton} onClick={() => handleDelete(user._id, user.name)}>
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/ff0000/delete-sign.png"
                      alt="Delete"
                      style={styles.icon}
                    />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    margin: '20px auto',
    maxWidth: '800px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    color: '#333',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  th: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#ffffff',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    marginRight: '5px',
    cursor: 'pointer',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  editForm: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
    maxWidth: '400px',
    margin: '20px auto',
  },
  input: {
    display: 'block',
    width: 'calc(100% - 20px)',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginRight: '10px',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  icon: {
    marginRight: '5px',
  },
};
