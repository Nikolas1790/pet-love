import React from 'react';
import sprite from '../../img/sprite.svg';
import { Star } from './StarRaiting.styled';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < rating}>
          <use href={`${sprite}#icon-star`} />
        </Star>
      ))}
    </div>
  );
};

export default StarRating;
