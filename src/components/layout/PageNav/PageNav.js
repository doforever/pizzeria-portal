import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PageNav.module.scss';


const PageNav = () => (
  <div className={styles.component}>
    <Button component={NavLink} className={styles.link} exact to={`/`} activeClassName={styles.active}>Home</Button>
    <Button component={NavLink} className={styles.link} to={`/login`} activeClassName={styles.active}>Login</Button>
    <Button component={NavLink} className={styles.link} to={`/tables`} activeClassName={styles.active}>Tables</Button>
    <Button component={NavLink} className={styles.link} to={`/waiter`} activeClassName={styles.active}>Waiter</Button>
    <Button component={NavLink} className={styles.link} to={`/kitchen`} activeClassName={styles.active}>Kitchen</Button>
  </div>
);

export default PageNav;
