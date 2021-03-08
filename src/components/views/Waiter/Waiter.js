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

const columns = [
  { field: 'id', headerName: 'Table', width: 70},
  { field: 'order', headerName: 'Order', flex: 2},
  { field: 'status', headerName: 'Status', flex: 1},
  { field: 'timeLastChanged', headerName: 'Time since change', flex: 1},
  { field: 'actions', headerName: 'Actions', width: 245, renderCell: () => renderActions()},
];

const rows = [
  { id: 1,
    order: 'some summary',
    status: 'new',
    timeLastChanged: '00:10'},
  { id: 2,
    order: 'some summary',
    status: 'delivered',
    timeLastChanged: '00:15'},
  { id: 3,
    order: 'some summary',
    status: 'done',
    timeLastChanged: '00:20'},
];

function renderActions() {
  return (
    <span>
      <Button size="small">
        new
      </Button>
      <Button size="small">
        delivered
      </Button>
      <Button size="small">
        done
      </Button>
    </span>
  );
}

const Waiter = ({history}) => {
  const selectOrder = id => {
    history.push(`waiter/order/${id}`);
  };

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
                    onRowClick={params => selectOrder(params.row.id)}/>
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
