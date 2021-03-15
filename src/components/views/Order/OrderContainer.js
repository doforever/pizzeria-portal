import { connect } from 'react-redux';
import Order from './Order';
import { getOrderForId, getLoadingState, fetchOrderFromAPI } from '../../../redux/ordersRedux';
import { getTableForOrderId } from '../../../redux/tablesRedux';

const mapStateToProps = (state, {id}) => ({
  order: getOrderForId(state, id),
  loading: getLoadingState(state),
  tableId: getTableForOrderId(state, id).id,
});

const mapDispatchToProps = (dispatch, {id}) => ({
  fetchOrder: () => dispatch(fetchOrderFromAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
