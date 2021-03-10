import React from 'react';
import order from '../../../data/order.json';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const OrderSummary = () => {
  const {totalPrice, id, table, products} = order;

  return (
    <div>
      <Typography variant="h4" gutterBottom>Order id: {id}</Typography>
      <Typography variant="h4" gutterBottom>Total price: {totalPrice}</Typography>
    </div>
  );
};

export default OrderSummary;
