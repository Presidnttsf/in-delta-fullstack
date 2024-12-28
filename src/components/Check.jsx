import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Check = () => {
  const [users, setUsers] = useState([]); // State to store fetched data
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading

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

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is Check Component</h1>
      {loading && <p>Loading...</p>}
      {error && <h1 style={{ color: 'red' }}>Error: {error}</h1>}
      {!loading && !error && (
        <ul>
          {users.map((user, index) => (
            <div key={index} style={{ textAlign: 'center', background: "aqua" }} >
              <li > {index + 1}: {user.name}</li>
              <p > {user.email}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
