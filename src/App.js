import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import TopicsList from './components/TopicsList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles" />
        <ArticlesList path="/:filter/articles" />
        <TopicsList path="/topics" />
        <UsersList path="/users" />
      </Router>
    </div>
  );
}

export default App;
