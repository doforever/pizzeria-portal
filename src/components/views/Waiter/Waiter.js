import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const columns = [
  { field: 'id', headerName: 'Table', width: 70},
  { field: 'order', headerName: 'Order', flex: 1, renderCell: ({row}) => renderOrder(row.order)},
  { field: 'status', headerName: 'Status', flex: 1},
  // { field: 'timeLastChanged', headerName: 'Time since change', flex: 1},
  { field: 'actions', headerName: 'Actions', flex:1, renderCell: ({row}) => renderActions(row.status)},
];

const rows = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

function renderActions (status) {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button>new order</Button>
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
    <Link href={`/waiter/order/${order}`}>
      Order id: {order}
    </Link>
  );
}

const Waiter = ({history}) => {

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
                    rows={rows}
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
            <CardActions>
              <Button color="primary" href="waiter/order/new">Add new order</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

Waiter.propTypes = {
  history: PropTypes.object,
};

export default Waiter;
