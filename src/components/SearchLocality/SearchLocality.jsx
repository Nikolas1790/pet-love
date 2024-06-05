import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { citiesInf } from '../../redux/petLove/operations';

export default function SearchLocality({  onLocationChange  }) {

  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesInf());
  }, [dispatch]);
  
  const fetchLocations = async (input) => {
    try {
      const response = await axios.get(`/api/locations?search=${input}`);
      setOptions(response.data.locations.map((location) => ({
        value: location.id,
        label: location.name,
      })));
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  useEffect(() => {
    if (inputValue) {
      fetchLocations(inputValue);
    }
  }, [inputValue]);

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const handleChange = (selectedOption) => {
    onLocationChange(selectedOption);
  };

  return (
    <Select
      value={null}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={handleChange}
      options={options}
      placeholder="Search for a location"
      isClearable
    />
  );
};