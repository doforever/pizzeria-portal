import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewEvent from './components/views/NewEvent/NewEvent';
import Waiter from './components/views/Waiter/Waiter';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`/`} component={Dashboard} />
          <Route exact path={`/login`} component={Login} />
          <Route exact path={`/tables`} component={Tables} />
          <Route exact path={`/tables/booking/new`} component={NewBooking} />
          <Route exact path={`/tables/booking/:id`} component={Booking} />
          <Route exact path={`/tables/events/new`} component={NewEvent} />
          <Route exact path={`/tables/events/:id`} component={Event} />
          <Route exact path={`/waiter`} component={Waiter} />
          <Route exact path={`/waiter/order/new`} component={NewOrder} />
          <Route exact path={`/waiter/order/:id`} component={Order} />
          <Route exact path={`/kitchen`} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
