import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../../features/Menu/Menu';
import OrderEditor from '../../features/OrderEditor/OrderEditorContainer';

const NewOrder = ({ tableId }) => {
  const newOrder = {totalPrice: 0, products: []};


  return (
    <div className={styles.component}>
      <Typography component="h1" variant="h3" gutterBottom>New order</Typography>
      <Grid container spacing={2} direction="column">
        <Grid item>
        	<Menu />
        </Grid>
        <Grid item>
          <OrderEditor table={{id: tableId}} order={newOrder}/>
        </Grid>
      </Grid>
    </div>
  );
};

NewOrder.propTypes = {
  tableId: PropTypes.number,
};

export default NewOrder;

