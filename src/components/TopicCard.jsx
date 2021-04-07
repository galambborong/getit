import { Link } from '@reach/router';
const TopicCard = ({ topic }) => {
  const { description, slug } = topic;
  return <Link to={`/${slug}/articles`}>{description}</Link>;
};

export default TopicCard;
