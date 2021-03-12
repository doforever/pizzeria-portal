import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ReservationForm from '../../features/ReservationForm/ReservationForm';

const Event = ({match}) => {
  const id = match.params.id;
  const [inEdit, setInEdit] = useState(false);

  return (
    <div className={styles.component}>
      <Card>
        <CardHeader title={`Event ${id}`} titleTypographyProps={{variant: 'h3'}}/>
        <CardContent>
          <ReservationForm inEdit={inEdit}/>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={() => setInEdit(true)}>Edit Event</Button>
          <Button color="primary" onClick={() => setInEdit(false)}>Save</Button>
        </CardActions>
      </Card>
    </div>
  );
};

Event.propTypes = {
  match: PropTypes.object,
};


export default Event;

