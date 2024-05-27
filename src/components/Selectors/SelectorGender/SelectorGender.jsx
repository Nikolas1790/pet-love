import { useEffect, useRef, useState } from 'react';
import sprite from '../../../img/sprite.svg';
import { Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg } from './SelectorGender.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesList, selectSexList } from '../../../redux/petLove/selector';
import { categoriesInf, gendersInf } from '../../../redux/petLove/operations';

export default function SelectorGender (){
  const [selectedArticle, setSelectedArticle] = useState("");
  const [dropdownArticle, setDropdownArticle] = useState(false);
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const sex = useSelector(selectSexList);

  useEffect(() => {
    dispatch(gendersInf())
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

  const extendedCategories = ["Show all", ...sex];

  const toggleDropdown = () => setDropdownArticle(!dropdownArticle);
  const handleDropdownButtonClick = (event) => {
    toggleDropdown();
  };

  const handleItemClick = (category) => {
    console.log(category)
    setSelectedArticle(category);
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
        {selectedArticle || "By gender"}
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