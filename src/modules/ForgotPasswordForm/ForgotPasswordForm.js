import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Captcha from 'Src/modules/Captcha';
import './forgotPasswordForm.scss';

let ForgotPasswordForm = props => (
  <div className="forgot-password-form">
    <div className="form">
      <div className="title">Forgot Password</div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="EMAIL"
        />
        <Field name="g-recaptcha-response" component={Captcha} />
        <button>SUBMIT</button>
      </form>
    </div>
  </div>
);

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

ForgotPasswordForm = reduxForm({
  form: 'forgotPassword'
})(ForgotPasswordForm);

export default withRouter(ForgotPasswordForm);
