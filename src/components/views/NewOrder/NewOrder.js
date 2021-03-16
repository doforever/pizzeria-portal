import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../../features/Menu/Menu';
import OrderEditor from '../../features/OrderEditor/OrderEditor';

const NewOrder = ({ tableId }) => {
  const [newOrder, setNewOrder] = useState({totalPrice: 0, products: []});
  const [tableNbr, setTableNbr] = useState(tableId);

  const addProduct = product => {
    console.log('adding product', product);
    setNewOrder(products => [...products, product]);
  };

  const updateOrder = (order) => {
    console.log('updating order', order);
  };

  const saveOrder = () => {
    console.log('save order on server');
  };

  return (
    <div className={styles.component}>
      <Typography component="h1" variant="h3" gutterBottom>New order</Typography>
      <Grid container spacing={2} direction="column">
        <Grid item>
        	<Menu add={addProduct}/>
        </Grid>
        <Grid item>
          <OrderEditor
            tableNbr={tableNbr}
            setTableNbr={setTableNbr}
            order={newOrder}
            updateOrder={updateOrder}
            onSave={saveOrder}
          />
        </Grid>
      </Grid>
    </div>
  );
};

NewOrder.propTypes = {
  tableId: PropTypes.number,
};

export default NewOrder;

