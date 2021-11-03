import { useState, useEffect } from 'react';
import fetch from './fetch';

const usersApi = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUrl = async (url) => {
      const result = await fetch(url);

      setUsers(result);
    }

    fetchUrl(usersApi)
  }, [])

  return (
    <div>
      {users.map(user => {
        const { id, name, email } = user;
        return (
          <p key={id}>{name} : <i>{email}</i></p>
        )
      })}
    </div>
  );
}

export default Users;
