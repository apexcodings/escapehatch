import React from 'react';
import PropTypes from 'prop-types';
import signupLoginScss from './scss/SignupLogin.scss';


const AuthFormSignup = props => {

  const { name, displayName, handleSignupSubmit, error } = props;

  return (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <form className="form-horizontal" onSubmit={handleSignupSubmit} name={name}>
        <fieldset>
          <div id="legend">
            <legend className="">Sign Up</legend>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="firstName">First Name</label>
            <div className="controls">
              <input type="text" id="firstName" name="firstName" placeholder="" className="form-control input-lg" />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="lastName">Last Name</label>
            <div className="controls">
              <input type="text" id="lastName" name="lastName" placeholder="" className="form-control input-lg" />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="email">E-mail</label>
            <div className="controls">
              <input type="text" id="email" name="email" placeholder="" className="form-control input-lg"/>
              <p className="help-block">Please provide your E-mail</p>
            </div>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="password">Password</label>
            <div className="controls">
              <input type="text" id="password" name="password" type="password" className="form-control input-lg"/>
              <p className="help-block">Password should be at least 6 characters</p>
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              <button className="btn btn-success btn-lg"type="submit">{ displayName }</button>
            </div>
          </div>
        </fieldset>
        { error &&  <div> { error.response.data } </div> }
      </form>
      <a href="/auth/google">{ displayName } with Google</a>
      </div>
    </div>
  </div>

  );
};

export default AuthFormSignup;

AuthFormSignup.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSignupSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};