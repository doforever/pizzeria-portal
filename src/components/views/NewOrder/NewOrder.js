import React, {useState} from 'react';
import styles from './NewOrder.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../../features/Menu/Menu';
import OrderEditor from '../../features/OrderEditor/OrderEditor';

const NewOrder = () => {
  const [order, setOrder] = useState({totalPrice:0, products: []});

  return (
    <div className={styles.component}>
      <Typography component="h1" variant="h3" gutterBottom>New order</Typography>
      <Grid container spacing={2} direction="column">
        <Grid item>
        	<Menu />
        </Grid>
        <Grid item>
          <OrderEditor {...order}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewOrder;

