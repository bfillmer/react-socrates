
import React, { Component, PropTypes } from 'react';

/**
 * @NOTE
 * Currently app takes the prop store, the Socrates-wrapped store, subscribes to it,
 * and can pass along the internal state of store to children. Extend this into
 * a standard reusable component that can be reused by any container. Thus any
 * stateless components will simple pass along the store, if needed, or be getting
 * "unwrapped" data from their parent container.
 */

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      store: {},
    };
  }

  componentWillMount () {
    this.setState({
      store: this.props.store(),
    });
    this.props.store.subscribe((s) => this.setState({
      store: s,
    }));
  }

  // Pass this.state.store down as the Redux store.
  render () {
    return (
      <div className = "container-app">
        <h1>
          Basic Boilerplate! { this.state.store.test }
        </h1>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.func.isRequired,
};

export default App;
