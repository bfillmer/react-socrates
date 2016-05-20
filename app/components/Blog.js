
import React, { PropTypes } from 'react';
import { navigate } from 'redux-routes';

import classNames from 'classnames';

export const Blog = ({
  action,
  text,
}) => {
  const divClasses = classNames(['container-blog', 'container']);
  const buttonClasses = classNames(['btn', 'btn-primary']);

  return (
    <div className = { divClasses }>
      <h1>{ text.blogTitle }</h1>
      <button className = { buttonClasses } onClick={() => action(navigate('/'))}>
        Go home
      </button>
    </div>
  );
};

Blog.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired,
};
