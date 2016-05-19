
import React, { Component, PropTypes } from 'react';
import route from 'enroute';

import { Blog } from 'components/Blog';
import { Home } from 'components/Home';

// Primary container component, sets state to the contents of the Socrates
// store on mount and when the store changes.
export class App extends Component {
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
