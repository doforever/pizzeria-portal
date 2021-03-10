import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';


const ProductOptions = ({label, type, options}) => {
  switch (type) {
    case 'radios':
    case 'select':
      return (
        <FormControl component="fieldset">
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup aria-label={label} name={label}>
            {Object.keys(options).map(option => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={options[option].label} />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case 'checkboxes':
      return (
        <FormControl component="fieldset">
          <FormLabel component="legend">{label}</FormLabel>
          <FormGroup>
            {Object.keys(options).map(option => (
              <FormControlLabel key={option}
                control={<Checkbox name={option} />}
                label={options[option].label}
              />
            ))}
          </FormGroup>
        </FormControl>
      );
    default:
      return null;
  }
};

ProductOptions.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.object),
};
export default ProductOptions;
