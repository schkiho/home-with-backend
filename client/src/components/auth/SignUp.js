import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertAction';
import { signUp } from '../../redux/actions/authAction';
import ProgressBar from 'react-dennis-progressbar';
import PropTypes from 'prop-types';

const SignUp = ({ setAlert, signUp, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const [stepNumber] = useState(0);

  const { email, password, password2 } = formData;

  let calculatedPercentage = Math.round(
    (100 * (stepNumber + 1)) / [1, 1, 1, 1].reduce((a, b) => a + b)
  );

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      signUp(email, password);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/create-profile' />;
  }

  return (
    <div className='container'>
      <p className='lead' style={{ textAlign: 'center' }}>
        You have {calculatedPercentage} % finished
      </p>
      <ProgressBar
        stepNumber={stepNumber}
        steps={[1, 1, 1]}
        bullets={true}
        bulletColor={{
          active: '#28a745',
          inactive: '#c4c4c4',
        }}
        lineColor={{
          active: '#28a745',
          inactive: '#c4c4c4',
        }}
        lineHeight={8}
      />
      <h1 className='large text-success'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
            required
          />
        </div>
        <div className='form-group mb-4'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <input type='submit' className='btn btn-success' value='Sign Up' />
        </div>
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/signin'>Sign In</Link>
      </p>
    </div>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signUp, setAlert })(SignUp);
