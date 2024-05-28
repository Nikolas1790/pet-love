import { useEffect, useRef, useState } from 'react';
import sprite from '../../../img/sprite.svg';
import { Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg } from './SelectorCategory.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesList } from '../../../redux/petLove/selector';
import { categoriesInf } from '../../../redux/petLove/operations';

export default function SelectorCategory ({ setSelectedCategory }){
  const [selectedArticle, setSelectedArticle] = useState("");
  const [dropdownArticle, setDropdownArticle] = useState(false);
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesList);

  useEffect(() => {
    dispatch(categoriesInf())
  }, [dispatch]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownArticle(false); 
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [setDropdownArticle]); 

  const extendedCategories = ["Show all", ...categories];

  const toggleDropdown = () => setDropdownArticle(!dropdownArticle);
  const handleDropdownButtonClick = (event) => {
    toggleDropdown();
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleItemClick = (category) => {
    console.log(category)
    const capitalizedCategory = capitalizeFirstLetter(category);
    setSelectedArticle(capitalizedCategory);
    setSelectedCategory(category)
    toggleDropdown();
  };

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownSvg onClick={toggleDropdown}>
        <use href={`${sprite}#icon-chevron-${dropdownArticle ? 'up' : 'down'}`} />
      </DropdownSvg>
      <DropdownButton
        type="button" 
        onClick={handleDropdownButtonClick} 
      >
        {selectedArticle || "Category"}
      </DropdownButton>  
      <DropdownList open={dropdownArticle}>
          {extendedCategories.map((category, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(category)}>
              {category}
            </DropdownItem>
          ))}
      </DropdownList>                      
    </Dropdown>
  )
}