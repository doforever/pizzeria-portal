import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './SwitchingAmount.module.scss';

const SwitchingAmount = ({value, isReadOnly, min, max}) => {
  if (isReadOnly) {
    return (
      <span>{value}</span>
    );
  } else {
    return (
      <TextField className={styles.input}
        value={value}
        type="number"
        inputProps={{ min, max }}
      />
    );
  }
};

export default SwitchingAmount;
