import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ProductOptions from '../ProductOptions/ProductOptions';

import styles from './MenuProduct.module.scss';

const renderParams = params => {
  if (params) return (
    <Grid item container spacing={4}>
      {Object.keys(params).map(param => {
        return (
          <Grid item key={params[param].label}>
            <ProductOptions {...params[param]}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

const MenuProduct = ({name, price, params}) => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="h5">{name} (${price})</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2} direction="column">
          { renderParams(params) }
          <Grid item container spacing={2}>
            <Grid item>
              <TextField
                className={styles.fontChange}
                label="Choose quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="outlined">Add</Button>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

MenuProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  params: PropTypes.objectOf(PropTypes.object),
};

export default MenuProduct;
