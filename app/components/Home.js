
import React, { PropTypes } from 'react';
import { navigate } from 'redux-routes';

export const Home = ({
  action,
  text,
}) => (
  <div className = "container-home">
    <h1>{ text.greeting }</h1>
    <button onClick={() => action(navigate('/blog'))}>Go to the blog</button>
  </div>
);

Home.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired,
};
