
import React, { PropTypes } from 'react';
import SocratesContainer from 'socrates-container';

/**
 * @NOTE
 * Extending the SocratesContainer here is not really necessary as we
 * don't want data to display, we would nominally pass along Redux store
 * here, not even bothering with a class component, preferring stateless
 * functional until such time as we will need to interact with data.
 */

class App extends SocratesContainer {

  componentWillMount () {
    super.componentWillMount();
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
