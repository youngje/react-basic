import { useState, useEffect } from 'react';
import fetch from './fetch';
import users from './mockData';

const usersApi = 'https://jsonplaceholder.typicode.com/users';

// TODO: extract hooks
const Users = () => (
  <div>
    {users.map(user => {
      const { id, name, email } = user;
      return (
        <p key={id}>{name} : <i>{email}</i></p>
      )
    })}
  </div>
)

export default Users;
