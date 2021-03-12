import React from 'react';
import styles from './NewBooking.module.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ReservationForm from '../../features/ReservationForm/ReservationForm';


const NewBooking = () => {

  return (
    <div className={styles.component}>
      <Card>
        <CardHeader title="New booking" titleTypographyProps={{variant: 'h3'}}/>
        <CardContent>
          <ReservationForm />
        </CardContent>
        <CardActions>
          <Button color="primary">Save</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewBooking;

