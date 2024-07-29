import React, { useState } from "react";
import "./UserPosition.scss";
import { Link } from "react-router-dom";
import exit from "../../components/icons/exit.png";

// Define the interface for the component props
interface UserPositionProps {
  name: string;
  position: string;
  logOut: string;
}

export const UserPosition: React.FC<UserPositionProps> = ({
  name,
  position,
  logOut,
}) => {
  // Declares a state variable 'dropdownOpen' and a setter function 'setDropdownOpen' initialized to false
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Define a function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="user-position">
      <div className="user-details">
        <h4 style={{ color: "black" }}>{name}</h4>
        <p>{position}</p>
      </div>
      <div className="profile-picture" onClick={toggleDropdown}>
        <Link to="/Login">
          <img src={exit} />
        </Link>
      </div>
    </div>
  );
};

export default UserPosition;
