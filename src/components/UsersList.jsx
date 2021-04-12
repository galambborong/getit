import React from 'react';
import { fetchUsersList } from '../utils/api';
import Error from './Error';
import Loading from './Loading';
import UserCard from './UserCard';

class UsersList extends React.Component {
  state = {
    loading: true,
    error: null,
    users: []
  };

  componentDidMount() {
    fetchUsersList()
      .then((users) => {
        this.setState({ users, loading: false, error: false });
      })
      .catch((error) => {
        console.dir(error);
        this.setState({ error: error, loading: false });
      });
  }

  render() {
    const { users, loading, error } = this.state;
    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    return (
      <main className="users">
        <section className="users-container">
          {users.map((user) => {
            return <UserCard user={user} key={user.username} />;
          })}
        </section>
      </main>
    );
  }
}

export default UsersList;
