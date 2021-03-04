import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = props => {
  const data = props.match.params.id === 'new' ? null : props.match.params.id;

  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <h3>{data ? 'Order id: ' + data : 'Add new order'}</h3>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;
