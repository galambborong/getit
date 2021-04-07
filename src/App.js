import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import TopicsList from './components/TopicsList';
import UsersList from './components/UsersList';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles" />
        <ArticlesList path="/:topic/articles" />
        <Article path="/articles/:article_id" />
        <TopicsList path="/topics" />
        <UsersList path="/users" />
        <ArticlesList path="/users/:username/articles" />
      </Router>
    </div>
  );
}

export default App;
