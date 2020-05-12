import React, { Fragment, useEffect, useState } from 'react';
import ProgressBar from 'react-dennis-progressbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCurrentProfile,
  deleteAccount,
} from '../../redux/actions/profileAction';
import Spinner from '../layout/Spinner';
import DashboardTable from './DashboardTable';

const Dashboard = ({
  getCurrentProfile,
  profile: { profile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [stepNumber, setStepNumber] = useState(2);

  useEffect(() => {
    setTimeout(() => setStepNumber(3), 1000);
  }, []);

  let calculatedPercentage = Math.round(
    (100 * (stepNumber + 1)) / [1, 1, 1, 1].reduce((a, b) => a + b)
  );

  return profile === null && loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      {profile ? (
        <Fragment>
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
          <h1 className='large text-success'>Dashboard</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Welcome {profile.firstName}{' '}
            {profile.lastName}
          </p>
          <div className='dash-buttons'>
            <Link to='/edit-profile' className='btn btn-light'>
              <i className='fas fa-user-circle text-success mr-1 '></i> Edit
              Profile
            </Link>
          </div>
          <div className='card my-2'>
            <div className='card-body'>
              <h5 className='card-title'>Profile Details</h5>
              <p className='card-text'>
                Here a quick overview of your profile for changes Edit Profile
              </p>
            </div>
            <DashboardTable profile={profile} />
            <div className='card-body'>
              <h5 className='text-center'>If your details correct</h5>
              <a
                href='https://www.home.ht/en/housing/'
                className='btn btn-success btn-block'
              >
                Your new home
              </a>
            </div>
          </div>
          <div>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user'></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 className='large text-success'>Dashboard</h1>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-danger my-2'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
