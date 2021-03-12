import React, { useEffect } from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const columns = [
  { field: 'id', headerName: 'Table', width: 70},
  { field: 'order', headerName: 'Order', flex: 1, renderCell: ({row}) => renderOrder(row.order)},
  { field: 'status', headerName: 'Status', flex: 1},
  // { field: 'timeLastChanged', headerName: 'Time since change', flex: 1},
  { field: 'actions', headerName: 'Actions', flex:1, renderCell: ({row}) => renderActions(row.status)},
];

function renderActions (status) {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button href="waiter/order/new">new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button href="waiter/order/new">new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
}

function renderOrder (order) {
  if (order) return (
    <Link href={`waiter/order/${order}`}>
      Order id: {order}
    </Link>
  );
}

const Waiter = ({loading: { active, error }, tables, fetchTables}) => {

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

  if(active || !tables.length){
    return (
      <Paper className={styles.component}>
        <p>Loading...</p>
      </Paper>
    );
  } else if(error) {
    return (
      <Paper className={styles.component}>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Paper>
    );
  } else {
    return (
      <div className={styles.component}>
        <Typography component="h1" variant="h3" gutterBottom>Waiter</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <Typography component="h2" variant="h4" gutterBottom>Tables</Typography>
                  </Grid>
                  <Grid item>
                    <DataGrid
                      rows={tables}
                      columns={columns}
                      autoHeight
                      disableColumnSelector
                      disableSelectionOnClick
                      disableColumnMenu
                      hideFooter
                      showCellRightBorder
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
};

Waiter.propTypes = {
  fetchTables: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
};

export default Waiter;
