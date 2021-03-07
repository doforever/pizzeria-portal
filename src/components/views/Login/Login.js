import React from 'react';
import styles from './Login.module.scss';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Login = () => (
  <div className={styles.component}>
    <Grid container justify='center'alignContent='center'>
      <Grid item xs='12' sm='8' md='6'>
        <Paper className={styles.content}>
          <form noValidate>
            <TextField
              required
              id="login"
              label="Login"
              variant="outlined"
              fullWidth
              margin='normal'/>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin='normal'/>
            <Button className={styles.submit} variant='contained' color='primary' href='/panel'>Log in</Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Login;
