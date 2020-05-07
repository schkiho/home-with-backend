import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  return (
    <div className='container create-profile-container'>
      <h1 className='large text-success'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <form className='form my-4'>
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
        <div className='form-group mb-4'>
          <PhoneInput
            country={'de'}
            value={phoneNumber}
            id='phoneNumber'
            onChange={(phoneNumber) =>
              setFormData({ ...formData, phoneNumber })
            }
          />
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {};

export default connect(null)(CreateProfile);
