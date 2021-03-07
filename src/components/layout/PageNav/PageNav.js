import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './PageNav.module.scss';


const PageNav = () => (
  <div>
    <NavLink className={styles.link} exact to={`/`} activeClassName={styles.active}>Home</NavLink>
    <NavLink className={styles.link} to={`/login`} activeClassName={styles.active}>Login</NavLink>
    <NavLink className={styles.link} to={`/tables`} activeClassName={styles.active}>Tables</NavLink>
    <NavLink className={styles.link} to={`/waiter`} activeClassName={styles.active}>Waiter</NavLink>
    <NavLink className={styles.link} to={`/kitchen`} activeClassName={styles.active}>Kitchen</NavLink>
  </div>
);

export default PageNav;
