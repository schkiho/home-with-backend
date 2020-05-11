import React from 'react';
import PropTypes from 'prop-types';

const DashboardTable = ({ profile }) => {
  const { firstName, lastName, user, phoneNumber, salary } = profile;
  return (
    <table className='table table-striped'>
      <tbody>
        <tr>
          <td>First Name</td>
          <td>{firstName}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{lastName}</td>
        </tr>
        <tr>
          <td>Email Address</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>{phoneNumber}</td>
        </tr>
        <tr>
          <td>Range of Income</td>
          <td>{salary}</td>
        </tr>
      </tbody>
    </table>
  );
};

DashboardTable.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default DashboardTable;
