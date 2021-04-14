import { Link } from '@reach/router';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">get:it</Link>
      </h1>
    </header>
  );
};

export default Header;
