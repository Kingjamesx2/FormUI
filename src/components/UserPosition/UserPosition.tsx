import React, { useState } from 'react';
import './UserPosition.scss';

// Define the interface for the component props
interface UserPositionProps {
  name: string; 
  position: string; 
  profilePicture: string; 
}

export const UserPosition: React.FC<UserPositionProps> = ({ name, position, profilePicture }) => {
  // Declares a state variable 'dropdownOpen' and a setter function 'setDropdownOpen' initialized to false
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Define a function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  return (
    <div className="user-position"> 
      <div className="user-details"> 
        <h4>{name}</h4> 
        <p>{position}</p> 
      </div>
      <div className="profile-picture" onClick={toggleDropdown}> 
        <img src={profilePicture} alt={name} />
        {dropdownOpen && ( 
          <ul className="dropdown-menu"> 
            <li>Logout</li> 
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserPosition;