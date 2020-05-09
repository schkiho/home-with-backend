import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/actions/profileAction';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth,
  profile: { profile, loading },
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
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {profile.firstName}{' '}
        {profile.lastName}
      </p>
      <div className='dash-buttons'>
        <Link to='/edit-profile' className='btn btn-light'>
          <i className='fas fa-user-circle text-success mr-1 '></i> Edit Profile
        </Link>
      </div>
      <div className='card my-5'>
        <div className='card-body'>
          <h5 className='card-title'>Profile Details</h5>
          <p className='card-text'>
            Here a quick overview of your profile for changes klick Edit Profile
          </p>
        </div>
        <table className='w-100 m-2'>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <td>Email Address</td>
              <td>{profile.user.email}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{profile.phoneNumber}</td>
            </tr>
            <tr>
              <td>Range of Income</td>
              <td>{profile.salary}</td>
            </tr>
          </tbody>
        </table>
        {/* <ul className='list-group list-group-flush'>
          <li className='list-group-item'>First Name {profile.firstName}</li>
          <li className='list-group-item'>Last Name: {profile.lastName}</li>
          <li className='list-group-item'>
            Email Address: {profile.user.email}
          </li>
          <li className='list-group-item'>
            Phone Number: {profile.phoneNumber}
          </li>
          <li className='list-group-item'>Range of Income: {profile.salary}</li>
        </ul> */}
        <div className='card-body'>
          <a href='#' className='card-link'>
            Card link
          </a>
          <a href='#' className='card-link'>
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
