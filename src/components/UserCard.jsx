import { Link } from '@reach/router';

const UserCard = ({ user }) => {
  const { username, avatar_url, name } = user;
  return (
    <article className="user">
      <img className="user__img" src={avatar_url} alt={name} />
      <h2 className="user__username">@{username}</h2>
      <button className="user__btn">
        <Link to={`/users/${username}/articles`}>articles</Link>
      </button>
    </article>
  );
};

export default UserCard;
