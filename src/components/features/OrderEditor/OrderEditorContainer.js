import { connect } from 'react-redux';
import OrderEditor from './OrderEditor';
import { getOrderForId, getLoadingState, fetchOrderFromAPI } from '../../../redux/ordersRedux';
import { getTableForOrderId, fetchFromAPI, getLoadingState as getLoadingTable } from '../../../redux/tablesRedux';

const mapStateToProps = (state, {id, order, table}) => {
  // const hasOrder = order ? true : false;
  return {
    order: order || getOrderForId(state, id),
    loading: getLoadingState(state),
    table: table || getTableForOrderId(state, id),
    loadingTable: getLoadingTable(state),
  };
};

const mapDispatchToProps = (dispatch, {id}) => ({
  fetchOrder: () => dispatch(fetchOrderFromAPI(id)),
  fetchTables: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderEditor);
