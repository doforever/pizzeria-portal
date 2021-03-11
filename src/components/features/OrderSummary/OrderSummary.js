import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import OrderParams from '../OrderParams/OrderParams';
import SwitchingAmount from '../../common/SwitchingAmount/SwitchingAmount';

import styles from './OrderSummary.module.scss';

const OrderSummary = ({totalPrice, products, editable}) => {

  const renderActions = () => (
    <div>
      <IconButton aria-label="delete">
        <DeleteIcon fontSize="small"/>
      </IconButton>
    </div>
  );

  const renderAmount = (amount) => (
    <SwitchingAmount value={amount} isReadOnly={!editable} min={0} max={9} />
  );

  const columns = [
    { field: 'id', headerName: 'ID', flex:1},
    { field: 'params', headerName: 'Params', flex: 4, renderCell: ({row}) => OrderParams(row.params)},
    { field: 'priceSingle', headerName: 'Price', flex: 1},
    { field: 'amount', headerName: 'Amount', flex: 1, renderCell: ({row}) => renderAmount(row.amount)},
    { field: 'actions', headerName: 'Actions', hide:!editable, flex:1, renderCell: () => renderActions()},
  ];

  return (
    <Paper variant="outlined" className={styles.component}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography component="h3" variant="h5" gutterBottom>Order summary</Typography>
        </Grid>
        <Grid item className={styles.table}>
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

OrderSummary.propTypes = {
  totalPrice: PropTypes.number,
  products: PropTypes.array,
  editable: PropTypes.bool,
};

export default OrderSummary;
