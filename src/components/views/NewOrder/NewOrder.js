import React from 'react';
import styles from './NewOrder.module.scss';
import products from '../../../data/products.json';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuProduct from '../../features/MenuProduct/MenuProduct';
import Grid from '@material-ui/core/Grid';

const NewOrder = () => {
  const calculatePrice = () => (40);
  return (
    <div className={styles.component}>
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <CardHeader
                title="New order"
                titleTypographyProps={{variant: 'h3'}}
              />
            </Grid>
            <Grid item>
              {products.map(product => (
                <MenuProduct key={product.id} {...product}/>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Total price: {calculatePrice()}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button color="primary">Save</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewOrder;

