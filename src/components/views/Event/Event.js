import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';

const Event = ({match}) => {
  const id = match.params.id;

  return (
    <div className={styles.component}>
      <h2>Event view</h2>
      <h3>Event id: {id}</h3>
    </div>
  );
};

Event.propTypes = {
  match: PropTypes.object,
};


export default Event;

