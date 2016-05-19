
import React, { PropTypes } from 'react';
import { navigate } from 'redux-routes';

export const Blog = ({
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
