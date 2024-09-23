import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { citiesInf } from '../../redux/petLove/operations';
import { selectCitiesList } from '../../redux/petLove/selector';
import { StyledSelect } from './SearchLocality.styled';

export default function SearchLocality({  onLocationChange  }) {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const citiesData = useSelector(selectCitiesList);  

  useEffect(() => {
    dispatch(citiesInf());
  }, [dispatch]);

  useEffect(() => {
    if (inputValue) {
      const filteredOptions = citiesData.filter(city =>{
         return city.cityEn.toLowerCase().includes(inputValue.toLowerCase())}
      ).map(city => {
        console.log(city)
        return ({ value: city.cityEn , label: city.cityEn, id: city._id })});
      setOptions(filteredOptions);
    } else {
      setOptions([]);
    }
  }, [inputValue, citiesData]);

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const handleChange = (selectedOption) => {
    onLocationChange(selectedOption);
  };

  return (
    <StyledSelect
    classNamePrefix="react-select"
      value={null}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={handleChange}
      options={options}
      placeholder="Location"
      isClearable
      // styles={customStyles}
    />
  );
};