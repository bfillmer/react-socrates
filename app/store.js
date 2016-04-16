
import socrates from 'socrates';
import history from 'redux-routes';
import logger from 'redux-logger';

const store = socrates([
  history(),
  logger(),
]);

export default store;
