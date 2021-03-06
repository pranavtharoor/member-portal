import { connect } from 'react-redux';
import Tutorials from './Tutorials';
import action from 'Src/utils/action';
import { pick } from 'ramda';

const mapDispatchToProps = dispatch => ({
  fetchTutorials: data => dispatch(action('FETCH_TUTORIALS_BEGIN', data))
});

const mapStateToProps = state => ({
  ...pick(['activeFilters'], state.tutorialFilter),
  ...pick(['tutorials'], state.tutorials)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorials);
