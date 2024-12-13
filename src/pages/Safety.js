import React from 'react';
import './Safety.css'; // Adjust the path as necessary

const Safety = () => {
  return (
    <div className="safety-container">
      <div className="safety-header-container">
        <h1>Safety Guidelines</h1>
        
      </div>
      <div className="safety-guidelines-container">
        <div className="safety-inner-container">
          <ul className="safety-list">
            <li>Receive proper training in wilderness survival, first aid, fire safety, and emergency procedures.</li>
            <li>Wear appropriate PPE such as helmets, gloves, high-visibility vests, sturdy boots, and fire-resistant clothing.</li>
            <li>Carry reliable communication devices like radios or satellite phones, and establish emergency protocols.</li>
            <li>Monitor weather conditions and avoid working during extreme weather (e.g., storms, heatwaves).</li>
            <li>Be aware of local wildlife, carry deterrents like bear spray, and avoid surprising animals.</li>
            <li>Follow fire safety practices, carry fire extinguishers, and familiarize yourself with fire evacuation routes.</li>
            <li>Use navigation tools (maps, compasses, GPS) and inform someone of your route and expected return time.</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Safety;
