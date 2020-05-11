import React, { Fragment, useEffect } from 'react';
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
  console.log(profile);

  return profile === null && loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='large text-success'>Dashboard</h1>
      {profile !== null ? (
        <Fragment>
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

          <div className='card my-5'>
            <div className='card-body'>
              <h5 className='card-title'>Profile Details</h5>
              <p className='card-text'>
                Here a quick overview of your profile for changes klick Edit
                Profile
              </p>
            </div>
            <DashboardTable profile={profile} />
            <div className='card-body'>
              <a href='#' className='card-link'>
                Card link
              </a>
              <a href='#' className='card-link'>
                Another link
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

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
