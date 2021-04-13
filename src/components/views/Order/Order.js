import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Menu from '../../features/Menu/Menu';
import OrderEditor from '../../features/OrderEditor/OrderEditor';
import Hidden from '@material-ui/core/Hidden';


const Order = ({ match, order, loading: { active, error }, fetchOrders}) => {
  const id = match.params.id;
  const [inEdit, setInEdit] = useState(false);

  const saveOrder = () => {
    setInEdit(false);
    console.log('save order on server');
  };

  const setTableNbr = () => {
    console.log('need to change table nbr on server');
  };

  const updateOrder = () => {
    console.log('need to update order on server');
  };

  useEffect(() => {
    if (!order) fetchOrders();
    // if (!table) fetchTables();
  }, []);

  if(active || !order ){
    return (
      <Paper>
        <p>Loading...</p>
      </Paper>
    );
  } else if(error) {
    return (
      <Paper>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Paper>
    );
  } else {
    return (
      <div className={styles.component}>
        <Typography component="h1" variant="h3" gutterBottom>Order id: {id}</Typography>
        <Grid container spacing={2} direction="column">
          <Hidden xsUp={!inEdit}>
            <Grid item>
              <Menu />
            </Grid>
          </Hidden>
          <Grid item>
            <OrderEditor
              editable={inEdit}
              onEdit={() => setInEdit(true)}
              onSave={saveOrder}
              tableNbr= {0}
              setTableNbr={setTableNbr}
              order={order}
              updateOrder={updateOrder}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;

