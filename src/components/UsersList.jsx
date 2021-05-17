import React, { useEffect, useState } from 'react';
import { fetchUsersList } from '../utils/api';
import Error from './Error';
import Loading from './Loading';
import UserCard from './UserCard';

export const UsersList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersList()
      .then((users) => {
        setUsers(users);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.dir(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <main className="users">
      <h2 className="users__header">get:it authors</h2>
      <section className="users-container">
        {users.map((user) => {
          return <UserCard user={user} key={user.username} />;
        })}
      </section>
    </main>
  );
};

export default UsersList;
