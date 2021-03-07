import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link className={styles.link} to={`waiter/order/new`}>Add new order</Link>
    <Link className={styles.link} to={`waiter/order/123`}>View order</Link>
  </div>
);

export default Waiter;
