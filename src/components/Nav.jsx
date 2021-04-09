import { Link } from '@reach/router';

const Nav = () => {
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
};

export default Nav;
