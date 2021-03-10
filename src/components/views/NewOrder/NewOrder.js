import React from 'react';
import styles from './NewOrder.module.scss';
import products from '../../../data/products.json';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MenuProduct from '../../features/MenuProduct/MenuProduct';
import Grid from '@material-ui/core/Grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Menu from '../../features/Menu/Menu';




const NewOrder = () => {
  return (
    <div className={styles.component}>
      <Typography component="h1" variant="h3" gutterBottom>New order</Typography>
      <Grid container spacing={2} direction="column">
        <Grid item>
        	<Menu />
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h4" display="inline">Choose table: </Typography>
                  <FormControl>
                    <Select
                      variant="outlined"
                      id="table-nbr"
                      defaultValue=""
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <OrderSummary />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button color="primary">Save</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewOrder;

