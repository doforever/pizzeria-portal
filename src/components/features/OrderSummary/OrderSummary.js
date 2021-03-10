import React from 'react';

import Typography from '@material-ui/core/Typography';


const OrderSummary = () => {
  const calculatePrice = () => (20);

  return (
    <Typography variant="h4" gutterBottom>Total price: {calculatePrice()}</Typography>
  );
};

export default OrderSummary;
