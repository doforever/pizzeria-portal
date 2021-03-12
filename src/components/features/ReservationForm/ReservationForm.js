import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const useStylesInput = makeStyles({
  root: {
    width: '201px',
  },
});

const useStylesLabel = makeStyles({
  root: {
    'font-size': '12px',
  },
});

const ReservationForm = ({inEdit = true}) => {
  const inputClasses = useStylesInput();
  const labelClasses = useStylesLabel();

  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            classes={{ root: inputClasses.root }}
            id="date"
            label="Date"
            type="date"
            value="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
              readOnly: !inEdit,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            classes={{ root: inputClasses.root }}
            id="time"
            label="Time"
            type="time"
            value="12:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
              readOnly: !inEdit,
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel classes={{ root: labelClasses.root }} id="table">Table</InputLabel>
          <Select
            classes={{ root: inputClasses.root }}
            labelId="table"
            value={1}
            inputProps={{ readOnly: !inEdit }}
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
              readOnly: !inEdit,
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
              readOnly: !inEdit,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item>
          <FormLabel classes={{ root: labelClasses.root }} component="legend">Starters</FormLabel>
          <FormControlLabel
            control={<Checkbox InputProps={{ readOnly: !inEdit }} checked name="water" />}
            label="Water"
          />
          <FormControlLabel
            control={<Checkbox InputProps={{ readOnly: !inEdit }} checked={false} name="bread" />}
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
              readOnly: !inEdit,
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
              readOnly: !inEdit,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

ReservationForm.propTypes = {
  inEdit: PropTypes.bool,
};

export default ReservationForm;
