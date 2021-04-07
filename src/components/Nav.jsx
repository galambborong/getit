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
        <Link to="/topics" className="nav__link">
          topics
        </Link>
        <Link to="/articles" className="nav__link">
          articles
        </Link>
        <Link to="/users" className="nav__link">
          users
        </Link>
      </nav>
    );
  }
}

export default Nav;
