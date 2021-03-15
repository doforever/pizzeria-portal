import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '../../features/Menu/Menu';
import OrderEditor from '../../features/OrderEditor/OrderEditorContainer';
import Hidden from '@material-ui/core/Hidden';


const Order = ({match}) => {
  const id = match.params.id;
  const [inEdit, setInEdit] = useState(false);

  const onSave = () => {
    setInEdit(false);
  };

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
            onSave={onSave}
            id={id}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;

