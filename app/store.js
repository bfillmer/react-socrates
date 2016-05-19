
import socrates from 'socrates';
import history from 'redux-routes';
import logger from 'redux-logger';

// Setup our Socrates store.
export const store = socrates([
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
