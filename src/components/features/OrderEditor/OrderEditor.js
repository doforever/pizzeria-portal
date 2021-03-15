import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SwitchingAmount from '../../common/SwitchingAmount/SwitchingAmount';

const OrderEditor = ({ editable=true, onSave, onEdit, table, order, fetchOrder, fetchTables, loading: { active, error }, loadingTable}) => {
  const renderActions = () => {
    return (
      <div>
        { editable ? '' : <Button color="primary" onClick={onEdit}>Edit</Button> }
        <Button color="primary" onClick={onSave}>Save</Button>
      </div>
    );
  };

  useEffect(() => {
    fetchOrder();

  }, [fetchOrder]);

  useEffect(() => {
    if (!table) {
      fetchTables();
    }
  }, [fetchTables, table]);

  if(active || loadingTable.active || !order || !table){
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
  } else if(loadingTable.error) {
    return (
      <Paper>
        <p>Error! Details:</p>
        <pre>{loadingTable.error}</pre>
      </Paper>
    );
  } else {
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
                <SwitchingAmount value={table.id} isReadOnly={!editable} min={0} max={6} />
              </Grid>
            </Grid>
            <Grid item>
              <OrderSummary editable={editable} {...order}/>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {renderActions()}
        </CardActions>
      </Card>
    );
  }
};

OrderEditor.propTypes = {
  table: PropTypes.object,
  editable: PropTypes.bool,
  onSave: PropTypes.func,
  onEdit: PropTypes.func,
  order: PropTypes.object,
  loading: PropTypes.object,
  loadingTable: PropTypes.object,
};

export default OrderEditor;
