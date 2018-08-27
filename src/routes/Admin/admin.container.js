import { connect } from 'react-redux';
import { pick } from 'ramda';
import Admin from './Admin';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  registrationQrScanned: data =>
    dispatch(action('REGISTRATION_QR_SCANNED', data))
});

const mapStateToProps = state => ({
  ...pick(['name', 'regNo', 'email', 'mobile', 'scanned'], state.admin)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
