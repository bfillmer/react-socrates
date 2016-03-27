
import { Component, PropTypes } from 'react';

/**
 * Socrates Container Class
 * Extends the standard component, listening for Redux store changes and passing
 * the updated data to the container.
 */
class SocratesContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      store: {},
    };
  }

  componentWillMount () {
    // Set initial state of store to match Redux init.
    this.setState({
      store: this.props.store(),
    });
    // Subscribe to the store updates and update component state on change.
    this.props.store.subscribe((s) => this.setState({
      store: s,
    }));
  }
}

SocratesContainer.propTypes = {
  store: PropTypes.func.isRequired,
};

export default SocratesContainer;
