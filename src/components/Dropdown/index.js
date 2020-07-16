import React, { useState } from 'react';
import './styles.css';


const Dropdown = ({ values }) => {
  const [dropdownValue, setDropdownValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const setSelectedValue = (value) => {
    setDropdownValue(value);
    setSearchValue('');
    setIsDropdownOpen(false);
  };

  const filteredOptions = searchValue ? values.filter(value => value.includes(searchValue)) : values;

  return <div className="dropdown-root">
    <button onClick={handleDropdownClick}>{dropdownValue || 'Dropdown'}</button>
    {
      isDropdownOpen && <div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <div className="dropdown-container">
          {
            filteredOptions.map(value => <div className="dropdown-option" key={`dropdown-${value}`}
                                              onClick={() => setSelectedValue(value)}>{value}</div>)
          }
          {
            !filteredOptions.length && <div>No matched values</div>
          }
        </div>
      </div>
    }
  </div>
};

export default Dropdown;
