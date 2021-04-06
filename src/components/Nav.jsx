import React from 'react';
import { Link } from '@reach/router';

class Nav extends React.Component {
  state = {
    loading: true,
    error: null
  };

  componentDidMount() {}

  render() {
    return (
      <nav className="nav">
        <Link to="/topics">topics</Link>
        <Link to="/articles">articles</Link>
        <Link to="/users">users</Link>
      </nav>
    );
  }
}

export default Nav;
