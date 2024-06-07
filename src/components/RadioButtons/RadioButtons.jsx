import React, { useState } from 'react';
import { RadioGroup, RadioContainer, Label, StyledRadioButton, SvgX } from './RadioButtons.styled';
import sprite from '../../img/sprite.svg';

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
          {selectedOptionGroup1 === 'Popular' && (
            <SvgX >
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
        </Label>
        <Label checked={selectedOptionGroup1 === 'Unpopular'}>
          <StyledRadioButton
            type="radio"
            value="Unpopular"
            checked={selectedOptionGroup1 === 'Unpopular'}
            onChange={handleOptionChangeGroup1}
          />
          Unpopular
          {selectedOptionGroup1 === 'Unpopular' && (
            <SvgX >
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
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
          {selectedOptionGroup2 === 'Cheap' && (
            <SvgX >
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
        </Label>
        <Label checked={selectedOptionGroup2 === 'Expensive'}>
          <StyledRadioButton
            type="radio"
            value="Expensive"
            checked={selectedOptionGroup2 === 'Expensive'}
            onChange={handleOptionChangeGroup2}
          />
          Expensive
          {selectedOptionGroup2 === 'Expensive' && (
            <SvgX >
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
        </Label>
      </RadioGroup>
    </RadioContainer>
  );
}
