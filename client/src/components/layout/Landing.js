import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../../img/home-logo.png';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='container'>
        <div className='col-12 my-4'>
          <img src={homeLogo} className='img-fluid home-logo' alt='logo' />
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
    </section>
  );
};

export default Landing;
