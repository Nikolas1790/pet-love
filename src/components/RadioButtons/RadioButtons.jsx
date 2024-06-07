import React, { useState } from 'react';
import { RadioGroup, RadioContainer, Label, StyledRadioButton } from './RadioButtons.styled';

export default function RadioButtons({ setSortCriteria }) {
  const [selectedOptionGroup1, setSelectedOptionGroup1] = useState('');
  const [selectedOptionGroup2, setSelectedOptionGroup2] = useState('');

  const handleOptionChangeGroup1 = (event) => {
    setSelectedOptionGroup1(event.target.value);
    setSortCriteria((prev) => ({ ...prev, group1: event.target.value }));
  };

  const handleOptionChangeGroup2 = (event) => {
    setSelectedOptionGroup2(event.target.value);
    setSortCriteria((prev) => ({ ...prev, group2: event.target.value }));
  };

  return (
    <RadioContainer>
      
      <RadioGroup>
        <Label  checked={selectedOptionGroup1 === 'Popular'}>
          <StyledRadioButton
            type="radio"
            value="Popular"
            checked={selectedOptionGroup1 === 'Popular'}
            onChange={handleOptionChangeGroup1}
          />
          Popular
        </Label>
        <Label checked={selectedOptionGroup1 === 'Unpopular'}>
          <StyledRadioButton
            type="radio"
            value="Unpopular"
            checked={selectedOptionGroup1 === 'Unpopular'}
            onChange={handleOptionChangeGroup1}
          />
          Unpopular
        </Label>
      </RadioGroup>
      
      <RadioGroup>
        <Label checked={selectedOptionGroup2 === 'Cheap'}>
          <StyledRadioButton
            type="radio"
            value="Cheap"
            checked={selectedOptionGroup2 === 'Cheap'}
            onChange={handleOptionChangeGroup2}
          />
          Cheap
        </Label>
        <Label checked={selectedOptionGroup2 === 'Expensive'}>
          <StyledRadioButton
            type="radio"
            value="Expensive"
            checked={selectedOptionGroup2 === 'Expensive'}
            onChange={handleOptionChangeGroup2}
          />
          Expensive
        </Label>
      </RadioGroup>
    </RadioContainer>
  );
}
