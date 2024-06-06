import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { citiesInf } from '../../redux/petLove/operations';
import { selectCitiesList } from '../../redux/petLove/selector';
import { StyledSelect } from './SearchLocality.styled';
// import Select from 'react-select';

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

  // const customStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     width: 227,
  //     height: 48,
  //     border: '1px solid rgb(246, 184, 61)',
  //     borderRadius: 30,
  //     backgroundColor: 'rgb(255, 255, 255)',
  //     boxShadow: 'none',
  //     '&:hover': {
  //       borderColor: 'rgb(246, 184, 61)',
  //     },
  //   }),
  //   input: (provided) => ({
  //     ...provided,
  //     margin: 0,
  //     padding: 0,
  //   }),
  //   valueContainer: (provided) => ({
  //     ...provided,
  //     padding: '0 6px',
  //   }),
  //   placeholder: (provided) => ({
  //     ...provided,
  //     color: 'rgba(0, 0, 0, 0.4)',
  //   }),
  //   indicatorSeparator: () => ({
  //     display: 'none',
  //   }),
  //   dropdownIndicator: (provided) => ({
  //     ...provided,
  //     padding: 4,
  //   }),
  //   menu: (provided) => ({
  //     ...provided,
  //     borderRadius: 15,
  //     marginTop: 0,
  //   }),
  //   menuList: (provided) => ({
  //     ...provided,
  //     borderRadius: 15,
  //   }),
  // };


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






// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { citiesInf } from '../../redux/petLove/operations';
// import { selectCitiesList } from '../../redux/petLove/selector';
// import { Button, ButtonContainer, Container, StyledSelect } from './SearchLocality.styled';


// export default function SearchLocality({  onLocationChange  }) {
//   const [inputValue, setInputValue] = useState('');
//   const [options, setOptions] = useState([]);
//   const dispatch = useDispatch();
//   const citiesData = useSelector(selectCitiesList);  

//   useEffect(() => {
//     dispatch(citiesInf());
//   }, [dispatch]);


//   const handleInputChange = (input) => {
//     setInputValue(input);
//   };



//   const handleSearch = () => {
//     setInputValue(inputValue);
//     if (inputValue) {
      
//     console.log(citiesData)
//     // console.log(input)
//       const filteredOptions = citiesData.filter(city =>{
//          return city.cityEn.toLowerCase().includes(inputValue.toLowerCase())}
//       ).map(city => {
//         console.log(city)
//         return ({ value: city.cityEn , label: city.cityEn })});
//       setOptions(filteredOptions);
//     } else {
//       setOptions([]);
//     }
//   };

//   const handleClear = () => {
//     setInputValue('');
//     setOptions([]);
//     onLocationChange(null);
//   };

//   const handleChange = (selectedOption) => {
//     onLocationChange(selectedOption);
//   };
//   return (
//     <Container>
//       <StyledSelect
//         classNamePrefix="react-select"
//         value={null}
//         inputValue={inputValue}
//         onInputChange={handleInputChange}
//         onChange={handleChange}
//         options={options}
//         placeholder="Location"
//         isClearable
//       />
//       <ButtonContainer>
//         <Button onClick={handleSearch}>Поиск</Button>
//         <Button onClick={handleClear}>Сброс</Button>
//       </ButtonContainer>
//     </Container>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { citiesInf } from '../../redux/petLove/operations';
// import { selectCitiesList } from '../../redux/petLove/selector';
// import { Button, ButtonContainer, Container, StyledSelect } from './SearchLocality.styled';

// export default function SearchLocality({ onLocationChange }) {
//   const [inputValue, setInputValue] = useState('');
//   const [searchValue, setSearchValue] = useState('');
//   const [options, setOptions] = useState([]);
//   const dispatch = useDispatch();
//   const citiesData = useSelector(selectCitiesList);

//   useEffect(() => {
//     dispatch(citiesInf());
//   }, [dispatch]);

//   // useEffect(() => {
//   //   if (searchValue) {
//   //     const filteredOptions = citiesData.filter(city =>
//   //       city.cityEn.toLowerCase().includes(searchValue.toLowerCase())
//   //     ).map(city => ({
//   //       value: city.cityEn,
//   //       label: city.cityEn
//   //     }));
//   //     setOptions(filteredOptions);
//   //   } else {
//   //     setOptions([]);
//   //   }
//   // }, [searchValue, citiesData]);

//   const handleInputChange = (input) => {
//     setInputValue(input);
//   };

//   const handleSearch = () => {
//     console.log(inputValue)
//     setSearchValue(inputValue);
//     if (searchValue) {
//       const filteredOptions = citiesData.filter(city =>
//         city.cityEn.toLowerCase().includes(searchValue.toLowerCase())
//       ).map(city => ({
//         value: city.cityEn,
//         label: city.cityEn
//       }));
//       setOptions(filteredOptions);
//     } else {
//       setOptions([]);
//     }
//   };

//   const handleClear = () => {
//     setInputValue('');
//     setSearchValue('');
//     setOptions([]);
//     onLocationChange(null);
//   };

//   const handleChange = (selectedOption) => {
//     onLocationChange(selectedOption);
//   };

//   return (
//     <Container>
//       <StyledSelect
//         classNamePrefix="react-select"
//         value={null}
//         inputValue={inputValue}
//         onInputChange={handleInputChange}
//         onChange={handleChange}
//         options={options}
//         placeholder="Location"
//         isClearable
//       />
//       <ButtonContainer>
//         <Button onClick={handleSearch}>Поиск</Button>
//         <Button onClick={handleClear}>Сброс</Button>
//       </ButtonContainer>
//     </Container>
//   );
// };
