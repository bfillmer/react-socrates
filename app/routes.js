
import { Home } from 'components/Home';
import { Blog } from 'components/Blog';

// Map routes to the correct higher order components.
// @NOTE: '*' must be last. Route matches against first match found.
export const routeMap = {
  '/blog': () => Blog,
  '*': () => Home,
};
