import React from 'react';
import styles from './NewEvent.module.scss';

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


const Event = () => {

  return (
    <div className={styles.component}>
      <Card>
        <CardContent>
          <CardHeader title="New event" titleTypographyProps={{variant: 'h3'}}/>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  className={styles.input}
                  id="date"
                  label="Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={styles.input}
                  id="time"
                  label="Time"
                  type="time"
                  defaultValue="12:00"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>
              <Grid item>
                <InputLabel className={styles.label} id="table">Table</InputLabel>
                <Select
                  className={styles.input}
                  labelId="table"
                  defaultValue=""
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </Grid>
              <Grid item>
                <TextField
                  label="Duration"
                  type="number"
                  defaultValue={1}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="People"
                  type="number"
                  defaultValue={1}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <FormLabel className={styles.label} component="legend">Starters</FormLabel>
                <FormControlLabel
                  control={<Checkbox name="water" />}
                  label="Water"
                />
                <FormControlLabel
                  control={<Checkbox name="bread" />}
                  label="Bread"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  label="Phone"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions>
          <Button color="primary">Save</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Event;

