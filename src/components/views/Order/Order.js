import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({match}) => {
  const id = match.params.id;

  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <h3>Order id: {id}</h3>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;
