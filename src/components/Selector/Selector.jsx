import { useEffect, useRef, useState } from 'react';
import sprite from '../../img/sprite.svg';
import { Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg, StyledSimpleBar } from './Selector.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesList } from '../../redux/petLove/selector';
import { categoriesInf } from '../../redux/petLove/operations';

export default function Selector (){
  const [selectedArticle, setSelectedArticle] = useState("");
  const [dropdownArticle, setDropdownArticle] = useState(false);
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesList);

  useEffect(() => {
    dispatch(categoriesInf())
  }, [dispatch]);

  // Добавляем "Show all" к списку категорий
  const extendedCategories = ["Show all", ...categories];


  const toggleDropdown = () => setDropdownArticle(!dropdownArticle);
  const handleDropdownButtonClick = (event) => {
    toggleDropdown();
  };

  const handleItemClick = (category) => {
    console.log(category)
    setSelectedArticle(category);
    // formik.setFieldValue(fieldName, category); 
    // toggleDropdown();
  };

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownSvg onClick={toggleDropdown}>
        <use href={`${sprite}#icon-chevron-${dropdownArticle ? 'up' : 'down'}`} />
      </DropdownSvg>
      <DropdownButton
        type="button" 
        onClick={handleDropdownButtonClick} 
        // haserror={hasError} 
        // defaultname={!selectedCategory && !reservName? "true" : ''}
      >
        {selectedArticle || "Category"}
      </DropdownButton>  
      <DropdownList open={dropdownArticle}>
        <StyledSimpleBar style={{ maxHeight: 126 }}>
          {extendedCategories.map((category, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(category)}>
              {category}
            </DropdownItem>
          ))}
        </StyledSimpleBar>
      </DropdownList>                      
    </Dropdown>
  )
}