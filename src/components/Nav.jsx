import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav className="nav" data-testid="nav">
      <Link to="/topics" data-testid="nav__topic" className="nav__link">
        topics
      </Link>
      <Link to="/articles" data-testid="nav__articles" className="nav__link">
        articles
      </Link>
      <Link to="/users" data-testid="nav__users" className="nav__link">
        users
      </Link>
    </nav>
  );
};

export default Nav;
