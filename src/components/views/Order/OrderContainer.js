import { connect } from 'react-redux';
import Order from './Order';
import { getOrderForId, getLoadingState, fetchFromAPI} from '../../../redux/ordersRedux';
// import { getTableForOrderId, fetchFromAPI, getLoadingState as getLoadingTable } from '../../../redux/tablesRedux';

const mapStateToProps = (state, props) => ({
  order: getOrderForId(state, props.match.params.id),
  loading: getLoadingState(state),
  // table: getTableForOrderId(state, id),
  // loadingTable: getLoadingTable(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
