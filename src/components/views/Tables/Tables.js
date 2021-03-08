import React, { useState } from 'react';
import styles from './Tables.module.scss';

import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

function renderCell({value}) {
  if (!value) {
    return null;
  } else {
    return (
      <Link href={'tables/booking/' + value.id}>
        {value.type[0].toUpperCase() + value.type.substring(1)} id: {value.id}
      </Link>
    );
  }
}

const columns = [
  { field: 'id', headerName: 'ID', hide: true},
  { field: 'hour', headerName: 'Time', width: 100},
  { field: 'table1', headerName: 'Table 1', flex: 1, renderCell},
  { field: 'table2', headerName: 'Table 2', flex: 1, renderCell},
  { field: 'table3', headerName: 'Table 3', flex: 1, renderCell},
];

const rows = [
  { id: 1, hour: '12:00', table3: {id: '1', type: 'booking'} },
  { id: 2, hour: '12:30', table3: {id: '1', type: 'booking'} },
  { id: 3, hour: '13:00', table1: {id: '2', type: 'booking'}},
  { id: 4, hour: '13:30'},
  { id: 5, hour: '14:00', table2: {id: '1', type: 'event'}},
  { id: 6, hour: '14:30', table2: {id: '1', type: 'event'}},
];

const Tables = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className={styles.component}>
      <Typography component="h1" variant="h3" gutterBottom>Tables</Typography>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Typography component="h2" variant="h4" gutterBottom>Bookings and events</Typography>
                </Grid>
                <Grid item>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={selectedDate} onChange={handleDateChange}/>
                    <TimePicker value={selectedDate} onChange={handleDateChange}/>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    disableColumnMenu
                    disableColumnSelector
                    disableSelectionOnClick
                    hideFooter
                    showCellRightBorder/>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button color="primary" href="tables/booking/new">Add new booking</Button>
              <Button color="primary" href="tables/events/new">Add new event</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tables;
