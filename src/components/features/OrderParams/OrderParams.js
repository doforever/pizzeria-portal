import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './OrderParams.module.scss';


const orderParams = params => (
  <List dense disablePadding>
    {Object.keys(params).map(key => (
      <ListItem key={key} dense disableGutters>
        <ListItemText
          className={styles.orderParamsItem}
          primary={params[key].label + ':'}
          secondary={Object.values(params[key].options).join(', ')}/>
      </ListItem>
    ))}
  </List>
);

orderParams.propTypes = {
  params: PropTypes.objectOf(PropTypes.object),
};

export default orderParams;
