import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Routes from './Routes';

const Main = ({ store }) => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

Main.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Main;
