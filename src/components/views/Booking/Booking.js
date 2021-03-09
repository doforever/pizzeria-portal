import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


const Booking = ({match}) => {
  const id = match.params.id;
  const [isReadOnly, setReadOnly] = useState(true);

  return (
    <div className={styles.component}>
      <Card>
        <CardContent>
          <CardHeader title={`Booking ${id}`} />
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  className={styles.input}
                  id="date"
                  label="Date"
                  type="date"
                  value="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                    readOnly: isReadOnly,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={styles.input}
                  id="time"
                  label="Time"
                  type="time"
                  value="12:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                    readOnly: isReadOnly,
                  }}
                />
              </Grid>
              <Grid item>
                <InputLabel className={styles.label} id="table">Table</InputLabel>
                <Select
                  className={styles.input}
                  labelId="table"
                  value={1}
                  inputProps={{ readOnly: isReadOnly }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </Grid>
              <Grid item>
                <TextField
                  label="Duration"
                  value={2}
                  type="number"
                  InputProps={{
                    readOnly: isReadOnly,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="People"
                  value={4}
                  type="number"
                  InputProps={{
                    readOnly: isReadOnly,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <FormLabel className={styles.label} component="legend">Starters</FormLabel>
                <FormControlLabel
                  control={<Checkbox InputProps={{ readOnly: isReadOnly }} checked name="water" />}
                  label="Water"
                />
                <FormControlLabel
                  control={<Checkbox InputProps={{ readOnly: isReadOnly }} checked={false} name="bread" />}
                  label="Bread"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  label="Phone"
                  value="123456789"
                  InputProps={{
                    readOnly: isReadOnly,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Address"
                  value="My address"
                  InputProps={{
                    readOnly: isReadOnly,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={() => setReadOnly(false)}>Edit booking</Button>
          <Button color="primary" onClick={() => setReadOnly(true)}>Save</Button>
        </CardActions>
      </Card>
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};


export default Booking;

