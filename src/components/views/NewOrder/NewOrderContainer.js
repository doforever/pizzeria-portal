import { connect } from 'react-redux';
import NewOrder from './NewOrder';
import { getChosenTable } from '../../../redux/chosenTableRedux';

const mapStateToProps = (state) => ({
  tableId: getChosenTable(state) || 0,
});

export default connect(mapStateToProps)(NewOrder);
