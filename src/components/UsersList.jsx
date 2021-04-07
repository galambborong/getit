import React from 'react';
import { fetchUsersList } from '../utils/api';

class UsersList extends React.Component {
  state = {
    loading: true,
    error: null,
    users: []
  };

  componentDidMount() {
    fetchUsersList()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    return <div>"USERS LIST"</div>;
  }
}

export default UsersList;
