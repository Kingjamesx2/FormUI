import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import useMediaQuery from '@mui/material/useMediaQuery'; 
import './SearchBar.scss'; 


interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // Function to call when a search is performed
  showIconOnly: boolean; 
}

// Define a functional component named SearchBar that takes SearchBarProps as props
//which declare a state variable 'searchTerm' and a setter function 'setSearchTerm' initialized to an empty string
export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, showIconOnly }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Define a handler function for changes in the input field 
  //which update the state variable 'searchTerm' with the new value from the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Define a handler function for form submission
  // Prevent the default form submission behavior
  // Call the onSearch function with the current search term
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    onSearch(searchTerm); 
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}> 
      <div className="search-input-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" /> 
        {!showIconOnly && ( 
          <input
            type="text"
            value={searchTerm} 
            onChange={handleChange} 
            placeholder="" 
          />
        )}
      </div>
    </form>
  );
};

export default SearchBar;
