import { Link } from '@reach/router';
const TopicCard = ({ topic }) => {
  const { description, slug } = topic;
  return (
    <Link to={`/${slug}/articles`}>
      <span className="accent accent--mod">{slug}</span>
      <br />
      {description}
    </Link>
  );
};

export default TopicCard;
