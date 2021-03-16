import { connect } from 'react-redux';
import Order from './Order';
import { getOrderForId, getLoadingState, fetchOrderFromAPI } from '../../../redux/ordersRedux';
import { getTableForOrderId, fetchFromAPI, getLoadingState as getLoadingTable } from '../../../redux/tablesRedux';

const mapStateToProps = (state, {id}) => ({
  order: getOrderForId(state, id),
  loading: getLoadingState(state),
  table: getTableForOrderId(state, id),
  loadingTable: getLoadingTable(state),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  fetchOrder: () => dispatch(fetchOrderFromAPI(id)),
  fetchTables: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
