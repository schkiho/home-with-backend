import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    salary: '',
  });

  const { firstName, lastName, phoneNumber, salary } = formData;
  return (
    <div className='container'>
      <h1 className='large text-success'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            id='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last Name'
            id='lastName'
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {};

export default connect(null)(CreateProfile);
