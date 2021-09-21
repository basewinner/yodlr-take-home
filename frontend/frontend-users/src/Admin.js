import YodlrApi from './Api';
import React, { useState, useEffect } from 'react';
import "./Admin.css";


function Admin() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let fetchedUsers = await YodlrApi.getUsers();
      setUsers(fetchedUsers);
      console.log(fetchedUsers);
      setIsLoading(false);
    }
    getUsers();    
  }, []);

  return (
    <div>
      <h1>Here are the users:</h1>
      {users.map(user => (
          <p key={user.id}>{user.firstName} {user.lastName}</p>
      ))}
    </div>
  );
}

export default Admin;
