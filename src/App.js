import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import TopicsList from './components/TopicsList';
import UsersList from './components/UsersList';
import Article from './components/Article';
import CommentsList from './components/CommentsList';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles" />
        <ArticlesList path="/:topic/articles" />
        <ArticlesList path="/users/:username/articles" />
        <Article path="/articles/:article_id" />
        <CommentsList path="/articles/:article_id/comments" />
        <TopicsList path="/topics" />
        <UsersList path="/users" />
        <Error default />
      </Router>
    </div>
  );
}

export default App;
