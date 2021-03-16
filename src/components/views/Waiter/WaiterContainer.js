import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateAPIStatus } from '../../../redux/tablesRedux';
import { chooseTable } from '../../../redux/chosenTableRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateStatus: (id, status) => dispatch(updateAPIStatus(id, status)),
  chooseTable: tableNumber => dispatch(chooseTable(tableNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
