import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => (
  <div>
    <main>
      <h1>Main layout</h1>

      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
