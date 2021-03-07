import React from 'react';
import styles from './Dashboard.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Dashboard = () => (
  <div className={styles.component}>
    <Typography component="h1" variant="h3" gutterBottom>Dashboard</Typography>
    <Grid container spacing="2">
      <Grid item xs='12' >
        <Card>
          <CardContent>
            <Typography component="h2" variant="h4" gutterBottom>Coming events</Typography>
            <List>
              <ListItem button>
                <ListItemText primary="12:30-12:30 Table 1" secondary="starters: water, bread"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="12:30-12:30 Table 1" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs='12' >
        <Card>
          <CardContent>
            <Typography component="h2" variant="h4" gutterBottom>Order statistics</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Orders</TableCell>
                    <TableCell align="right">Restaurant</TableCell>
                    <TableCell align="right">Delivery</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Order count
                    </TableCell>
                    <TableCell align="right">3</TableCell>
                    <TableCell align="right">4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Income
                    </TableCell>
                    <TableCell align="right">$300</TableCell>
                    <TableCell align="right">$400</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
