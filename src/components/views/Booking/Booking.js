import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ReservationForm from '../../features/ReservationForm/ReservationForm';

const Booking = ({match}) => {
  const id = match.params.id;
  const [inEdit, setInEdit] = useState(false);

  return (
    <div className={styles.component}>
      <Card>
        <CardHeader title={`Booking ${id}`} titleTypographyProps={{variant: 'h3'}}/>
        <CardContent>
          <ReservationForm inEdit={inEdit} />
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={() => setInEdit(true)}>Edit booking</Button>
          <Button color="primary" onClick={() => setInEdit(false)}>Save</Button>
        </CardActions>
      </Card>
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};


export default Booking;

