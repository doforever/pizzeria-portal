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

const OrderEditor = ({id, table, editable=true, onSave, onEdit, ...otherProps}) => {
  const renderActions = () => {
    return (
      <div>
        { editable ? '' : <Button color="primary" onClick={onEdit}>Edit</Button> }
        <Button color="primary" onClick={onSave}>Save</Button>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader
        title="Order"
        titleTypographyProps={{component:'h2', variant: 'h3'}}
      />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container spacing={2}>
            <Grid item>
              <Typography component="h3" variant="h5" display="inline">Choose table: </Typography>
            </Grid>
            <Grid item>
              <SwitchingAmount value={table} isReadOnly={!editable} min={0} max={3} />
            </Grid>
          </Grid>
          <Grid item>
            <OrderSummary editable={editable} {...otherProps}/>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {renderActions()}
      </CardActions>
    </Card>
  );
};

OrderEditor.propTypes = {
  id: PropTypes.number,
  table: PropTypes.number,
  editable: PropTypes.bool,
  onSave: PropTypes.func,
  onEdit: PropTypes.func,
};

export default OrderEditor;
