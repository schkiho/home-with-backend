import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../../img/home-logo.png';

const Landing = () => {
  return (
    <div className='container text-center'>
      <div className='col-12 d-flex justify-content-center mb-4'>
        <img src={homeLogo} className='img-fluid' alt='logo' />
      </div>
      <div className='col-12'>
        <h1>Welcome at Home</h1>
        <h5 className='my-4'>We make it simple to find your new Home</h5>
        <Link to='/signup' className='btn btn-lg btn-success'>
          <i className='fas fa-user text-white' /> Create Your Account
        </Link>
      </div>
      <p className='my-4'>
        Already have an account? <Link to='/signin'>Sign In</Link>
      </p>
    </div>
  );
};

export default Landing;
