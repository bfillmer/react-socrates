
import React, { PropTypes } from 'react';
import { navigate } from 'redux-routes';

import classNames from 'classnames';

export const Home = ({
  action,
  text,
}) => {
  const divClasses = classNames(['container-home', 'container']);
  const buttonClasses = classNames(['btn', 'btn-primary']);

  return (
    <div className = { divClasses }>
      <h1>{ text.greeting }</h1>
      <button className = { buttonClasses } onClick={() => action(navigate('/blog'))}>
        Go to the blog
      </button>
    </div>
  );
};

Home.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired,
};
