import React from 'react';

class Article extends React.Component {
  state = {
    loading: true,
    error: null
  };

  componentDidMount() {}

  render() {
    return <div>Article</div>;
  }
}

export default Article;
