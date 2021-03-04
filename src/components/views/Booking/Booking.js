import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = props => {
  const eventType = props.match.path.includes('events') ? 'Event' : 'Booking';
  const data = props.match.params.id === 'new' ? null : props.match.params.id;

  return (
    <div className={styles.component}>
      <h2>{eventType} view</h2>
      <h3>{data ? `${eventType} id: ${data}` : `Add new ${eventType.toLowerCase()}`}</h3>
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};


export default Booking;

