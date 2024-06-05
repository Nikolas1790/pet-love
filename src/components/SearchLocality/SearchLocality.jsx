import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { citiesInf } from '../../redux/petLove/operations';
import { selectCitiesList } from '../../redux/petLove/selector';

export default function SearchLocality({  onLocationChange  }) {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const citiesData = useSelector(selectCitiesList);  

  useEffect(() => {
    dispatch(citiesInf());
  }, [dispatch]);
  // console.log(citiesData)

  useEffect(() => {
    if (inputValue) {
      const filteredOptions = citiesData.filter(city =>{
        // console.log(city.cityEn)
         return city.cityEn.toLowerCase().includes(inputValue.toLowerCase())}
      ).map(city => {
        console.log(city)
        return ({ value: city.cityEn , label: city.cityEn })});
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
    <Select
      value={null}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={handleChange}
      options={options}
      placeholder="Search for a location"
      isClearable
      // styles={{
      //   control: (base) => ({
      //     ...base,
      //     border: '1px solid #ccc',
      //     boxShadow: 'none',
      //     '&:hover': {
      //       border: '1px solid #aaa',
      //     },
      //   }),
      //   menu: (base) => ({
      //     ...base,
      //     zIndex: 9999,
      //   }),
      // }}
    />
  );
};