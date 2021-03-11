import React from 'react';
import styles from './NewOrder.module.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Menu from '../../features/Menu/Menu';
import SwitchingAmount from '../../common/SwitchingAmount/SwitchingAmount';


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
            <CardHeader
              title="Make order"
              titleTypographyProps={{component:'h2', variant: 'h3'}}
            />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item container spacing={2}>
                  <Grid item>
                    <Typography component="h3" variant="h5" display="inline">Choose table: </Typography>
                  </Grid>
                  <Grid item>
                    <SwitchingAmount isReadOnly={false} min={0} max={3} />
                  </Grid>
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

