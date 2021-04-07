import React from 'react';
import { fetchUsersList } from '../utils/api';
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
      .catch((err) => {
        this.setState({ error: true, loading: false });
        console.dir(err);
      });
  }

  render() {
    const { users, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <main>
        {users.map((user) => {
          return <UserCard user={user} key={user.username} />;
        })}
      </main>
    );
  }
}

export default UsersList;
