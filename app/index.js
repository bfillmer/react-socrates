
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import SocratesContainer from 'socrates-container';
import route from 'enroute';
import { navigate } from 'redux-routes';

import store from './store';

const Home = ({
  dispatch,
  greeting,
}) => (
  <div className = "container-home">
    <h1>{ greeting }</h1>
    <button onClick={() => dispatch(navigate('/blog'))}>Go to the blog</button>
  </div>
);

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  greeting: PropTypes.string.isRequired,
};

const Blog = ({
  dispatch,
  blogTitle,
}) => (
  <div className = "container-blog">
    <h1>{ blogTitle }</h1>
    <button onClick={() => dispatch(navigate('/'))}>Go home</button>
  </div>
);

Blog.propTypes = {
  dispatch: PropTypes.func.isRequired,
  blogTitle: PropTypes.string.isRequired,
};

class App extends SocratesContainer {
  render () {
    return route({
      '/blog': (params) => (
        <Blog dispatch = { this.props.store } {...this.state.store } { ...params } />
      ),
      '*': (params) => (
        <Home dispatch = { this.props.store } { ...this.state.store } { ...params } />
      ),
    })(this.state.store.url);
  }
}

store('boot', {
  url: document.location.pathname,
  greeting: 'Welcome to the website, friend!',
  blogTitle: 'This is the blog!',
});

render(
  <App store = { store } />,
  document.getElementById('app')
);
