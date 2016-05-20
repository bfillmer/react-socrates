
import React, { Component, PropTypes } from 'react';
import route from 'enroute';

import { routeMap } from 'routes';

// Primary container component, sets state to the contents of the Socrates
// store on mount and when the store changes.
export class App extends Component {
  componentWillMount () {
    // Map socrates() as state.action.
    this.setState({
      action: this.props.store,
    });
    // Map store data to state.
    this.setState(this.props.store());
    // Subscribe to store changes.
    this.props.store.subscribe(s => this.setState(s));
  }

  render () {
    const RouteComponent = route(routeMap)(this.state.url);
    return (<RouteComponent { ...this.state } />);
  }
}

App.propTypes = {
  store: PropTypes.func.isRequired,
};
