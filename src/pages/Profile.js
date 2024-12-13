import React from 'react';
import './Profile.css';


const Profile = () => {
  return (
  <div className="Profile">
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img
            src="https://thumbs.dreamstime.com/b/icon-profile-color-green-icon-profile-color-green-circle-color-dark-green-background-color-white-194702090.jpg" 
            alt="Profile"
          />
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">Sara</h2>
          <p className="profile-location">Meknes, Morocco</p>
          <p className="profile-job">Forest Officer</p>
          <p className="profile-education">Master’s degree in
          Environmental Management</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <p className="stat-number">65</p>
          <p className="stat-label">Friends</p>
        </div>
        <div className="stat">
          <p className="stat-number">43</p>
          <p className="stat-label">Photos</p>
        </div>
        <div className="stat">
          <p className="stat-number">21</p>
          <p className="stat-label">Comments</p>
        </div>
      </div>
      <div className="profile-actions">
        <button className="btn-connect">Connect</button>
        <button className="btn-message">Message</button>
      </div>
      <button className="btn-show-more">Show more</button>
    </div>
    </div>
  );
};

export default Profile;
