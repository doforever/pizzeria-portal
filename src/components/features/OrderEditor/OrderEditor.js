import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Typography from '@material-ui/core/Typography';
import SwitchingAmount from '../../common/SwitchingAmount/SwitchingAmount';

const OrderEditor = ({id, table, ...otherProps}) => {

  return (
    <Card>
      <CardHeader
        title={id ? 'Order id: ' + id : 'New order'}
        titleTypographyProps={{component:'h2', variant: 'h3'}}
      />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container spacing={2}>
            <Grid item>
              <Typography component="h3" variant="h5" display="inline">Choose table: </Typography>
            </Grid>
            <Grid item>
              <SwitchingAmount value={table} isReadOnly={false} min={0} max={3} />
            </Grid>
          </Grid>
          <Grid item>
            <OrderSummary {...otherProps}/>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button color="primary">Save</Button>
      </CardActions>
    </Card>
  );
};

OrderEditor.propTypes = {
  id: PropTypes.number,
  table: PropTypes.number,
};

export default OrderEditor;
