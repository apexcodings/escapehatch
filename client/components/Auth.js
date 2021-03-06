import { connect } from 'react-redux';
import AuthFormLogin from './AuthFormLogin';
import AuthFormSignup from './AuthFormSignup';
import { authSignup, authLogin } from '../reducer/user';

const mapLogin = ({ user }) => ({
  name: 'login',
  displayName: 'Login',
  error: user.error
});

const mapSignup = ({ user }) => ({
  name: 'signup',
  displayName: 'Sign Up',
  error: user.error
});

const mapDispatch = dispatch => ({
  handleSignupSubmit(evt, pathname) {
    evt.preventDefault();
    const formName = evt.target.name;
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authSignup(firstName, lastName, email, password, formName, pathname));
  },

  handleLoginSubmit (evt, pathname) {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authLogin(email, password, formName, pathname));
  }
});

export const Login = connect(mapLogin, mapDispatch)(AuthFormLogin);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormSignup);
