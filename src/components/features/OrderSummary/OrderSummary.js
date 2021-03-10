import React, { useState } from 'react';
import order from '../../../data/order.json';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import OrderParams from '../OrderParams/OrderParams';

import styles from './OrderSummary.module.scss';

const OrderSummary = () => {
  const {totalPrice, id, products} = order;
  const [isReadOnly, setReadOnly] = useState(true);

  const renderAmount = (value) => (
    <TextField className={styles.amount}
      value={value}
      type="number"
      InputProps={{
        readOnly: isReadOnly,
      }}
    />
  );

  const renderActions = () => (
    <div>
      <IconButton aria-label="edit" onClick={() => setReadOnly(false)}>
        <EditIcon fontSize="small"/>
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon fontSize="small"/>
      </IconButton>
    </div>
  );

  const columns = [
    { field: 'id', headerName: 'ID', flex:1},
    { field: 'params', headerName: 'Params', flex: 3, renderCell: ({row}) => OrderParams(row.params)},
    { field: 'priceSingle', headerName: 'Price', flex: 1},
    { field: 'amount', headerName: 'Amount', flex: 1, renderCell: ({row}) => renderAmount(row.amount)},
    { field: 'actions', headerName: 'Actions', flex:1, renderCell: () => renderActions()},
  ];

  return (
    <Paper variant="outlined" className={styles.component}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography component="h3" variant="h5" gutterBottom>Order summary</Typography>
        </Grid>
        <Grid item>
          <Typography component="h4" variant="h6" >Order id: {id}</Typography>
        </Grid>
        <Grid item>
          <DataGrid
            rows={products}
            columns={columns}
            autoHeight
            disableColumnSelector
            disableSelectionOnClick
            disableColumnMenu
            hideFooter
            headerHeight={36}
            rowHeight={130}
          />
        </Grid>
        <Grid item>
          <Typography component="h4" variant="h6" >Total price: {totalPrice}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderSummary;
