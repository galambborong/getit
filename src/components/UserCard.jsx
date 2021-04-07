import { Link } from '@reach/router';

const UserCard = ({ user }) => {
  const { username, avatar_url, name } = user;
  return (
    <article className="user">
      <h2 className="user__username">{username}</h2>
      <img className="user__img" src={avatar_url} alt={name} />
      <button>
        <Link to={`/users/${username}/articles`}>{username}'s articles</Link>
      </button>
    </article>
  );
};

export default UserCard;
