import React from 'react';
import styles from './Dashboard.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', hide: true},
  { field: 'statistic', headerName: 'Statistic', flex:1},
  { field: 'restaurant', headerName: 'Restaurant', flex:1, type: 'number'},
  { field: 'delivery', headerName: 'Delivery', flex: 1, type: 'number'},
];

const rows = [
  { id: 'orderNbr', statistic: 'Order count', restaurant: 4, delivery: 3 },
  { id: 'income', statistic: 'Income ($)', restaurant: 400, delivery: 300 },
];

const Dashboard = () => (
  <div className={styles.component}>
    <Typography component="h1" variant="h3" gutterBottom>Dashboard</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} >
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
      <Grid item xs={12} >
        <Card>
          <CardContent>
            <Typography component="h2" variant="h4" gutterBottom>Order statistics</Typography>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight
              disableColumnMenu
              disableColumnSelector
              disableSelectionOnClick
              hideFooter
              showCellRightBorder/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
