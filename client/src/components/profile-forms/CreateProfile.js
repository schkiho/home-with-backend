import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../redux/actions/profileAction';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    salary: '',
  });

  const { firstName, lastName, phoneNumber, salary } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className='container create-profile-container'>
      <h1 className='large text-success'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to finish your
        profile
      </p>
      <form className='form my-4' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group mb-4'>
          <PhoneInput
            country={'de'}
            name='phoneNumber'
            value={phoneNumber}
            onChange={(phoneNumber) =>
              setFormData({ ...formData, phoneNumber })
            }
          />
        </div>
        <div className='form-groupe form-wrapper my-5'>
          <div className='radio-form'>
            <h4 id='form-title'>Select the Range of your monthly Income</h4>
            <div id='debt-amount-slider'>
              <input
                type='radio'
                name='salary'
                id='1'
                value='0 € - 1.000 €'
                checked={salary === '0 € - 1.000 €'}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor='1' data-debt-amount='< €1K'></label>
              <input
                type='radio'
                name='salary'
                id='2'
                value='1.000 € - 2.000 €'
                checked={salary === '1.000 € - 2.000 €'}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor='2' data-debt-amount='€1K-€2K'></label>
              <input
                type='radio'
                name='salary'
                id='3'
                value='2.000 € - 3.000 €'
                checked={salary === '2.000 € - 3.000 €'}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor='3' data-debt-amount='€2K-€3K'></label>
              <input
                type='radio'
                name='salary'
                id='4'
                value='3.000 € - 4.000 €'
                checked={salary === '3.000 € - 4.000 €'}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor='4' data-debt-amount='€3K-€4K'></label>
              <input
                type='radio'
                name='salary'
                id='5'
                value='more than 4.000 €'
                checked={salary === 'more than 4.000 €'}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor='5' data-debt-amount='€4K+'></label>
              <div id='debt-amount-pos'></div>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <input
            type='submit'
            className='btn btn-success'
            value='Create Profile'
          />
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
