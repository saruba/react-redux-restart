import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visiblilityFilter,
});

const mapDispachToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToProps,
  mapDispachToProps,
)(Link);

export default FilterLink;
