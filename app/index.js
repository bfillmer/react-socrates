
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import socrates from 'socrates';
import history, { navigate } from 'redux-routes';
import logger from 'redux-logger';
import route from 'enroute';

// Setup our Socrates store.
const store = socrates([
  history(),
  logger(),
]);

store('boot', {
  url: document.location.pathname,
  text: {
    greeting: 'Welcome to the website, friend!',
    blogTitle: 'This is the blog!',
  },
});

// Demo Components
const Home = ({
  action,
  text,
}) => (
  <div className = "container-home">
    <h1>{ text.greeting }</h1>
    <button onClick={() => action(navigate('/blog'))}>Go to the blog</button>
  </div>
);

Home.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired,
};

const Blog = ({
  action,
  text,
}) => (
  <div className = "container-blog">
    <h1>{ text.blogTitle }</h1>
    <button onClick={() => action(navigate('/'))}>Go home</button>
  </div>
);

Blog.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired,
};

// Primary container component, sets state to the contents of the Socrates
// store on mount and when the store changes.
class App extends Component {
  componentWillMount () {
    this.setState(this.props.store());
    this.props.store.subscribe(s => this.setState(s));
  }

  render () {
    return route({
      '/blog': () => (
        <Blog { ...this.state } action = { this.props.store } />
      ),
      '*': () => (
        <Home { ...this.state } action = { this.props.store } />
      ),
    })(this.state.url);
  }
}

App.propTypes = {
  store: PropTypes.func.isRequired,
};

// Render our application.
render(
  <App store = { store } />,
  document.getElementById('app')
);
