import React from 'react';
import styles from './Kitchen.module.scss';

import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const columns = [
  { field: 'id', headerName: 'ID', hide: true},
  { field: 'timestamp', headerName: 'Order time', flex: 1},
  { field: 'for', headerName: 'For', width: 100},
  { field: 'order', headerName: 'Order', flex: 2, renderCell: ({row}) => renderOrder(row.order)},
  { field: 'status', headerName: 'Status', flex: 1},
];

const rows = [
  { id: 1,
    timestamp: '12:00:00',
    for: '1',
    order: [
      {
        name: 'Nonna Alba\'s Pizza',
        sauce: 'tomato',
        toppings: ['olives', 'red peppers', 'green peppers', 'mushrooms', 'fresh basil'],
        crust: 'standard',
        amount: 1,
      },
      {
        name: 'Zia Giulia\'s Breakfast',
        coffee: 'espresso',
        amount: 2,
      },
    ],
    status: 'done'},
  { id: 2,
    timestamp: '12:15:00',
    for: '3',
    order: [
      {
        name: 'Nonna Alba\'s Pizza',
        sauce: 'tomato',
        toppings: ['olives', 'red peppers', 'green peppers', 'mushrooms', 'fresh basil'],
        crust: 'standard',
        amount: 1,
      },
      {
        name: 'Zia Giulia\'s Breakfast',
        coffee: 'espresso',
        amount: 2,
      },
    ],
    status: 'new'},
  { id: 3,
    timestamp: '12:15:30',
    for: '2',
    order: [
      {
        name: 'Nonna Alba\'s Pizza',
        sauce: 'tomato',
        toppings: ['olives', 'red peppers', 'green peppers', 'mushrooms', 'fresh basil'],
        crust: 'standard',
        amount: 1,
      },
      {
        name: 'Zia Giulia\'s Breakfast',
        coffee: 'espresso',
        amount: 2,
      },
    ],
    status: 'new'},
];

function renderOrder (order) {
  return (
    <List className={styles.order}>
      {order.map(({name, amount, ...otherParams}) => (
        <ListItem key={name}>
          <ListItemText
            className={styles.orderItem}
            primary={`${name} x${amount}`}
            secondary={kitchenOrderParams(otherParams)}
          >
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

const kitchenOrderParams = params => {
  let text = '';

  for (let param in params) {
    text += `${param}: `;
    const values = params[param];
    if (typeof values === 'string') {
      text += `${values}, `;
    } else { for (let value of values) {
      text += `${value}, `;
    }}
  }

  return text;
};

const Kitchen = () => {
  const toggleDone = (id) => {
    console.log(`Row ${id} done`);
  };

  return (
    <div className={styles.component}>
      <Typography component="h1" variant="h3" gutterBottom>Kitchen</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Typography component="h2" variant="h4" gutterBottom>Tables</Typography>
                </Grid>
                <Grid item>
                  <DataGrid
                    className={styles.data_grid}
                    rows={rows}
                    columns={columns}
                    rowHeight={200}
                    autoHeight
                    disableColumnSelector
                    disableSelectionOnClick
                    disableColumnMenu
                    hideFooter
                    showCellRightBorder
                    onRowClick={params => toggleDone(params.row.id)}/>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Kitchen;
