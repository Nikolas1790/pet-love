import SearchField from "components/SearchField/SearchField";
import { FilterContainer } from "./NoticesFilter.styled";
import SelectorCategory from "components/Selectors/SelectorCategory/SelectorCategory";
import SelectorGender from "components/Selectors/SelectorGender/SelectorGender";

export default function NoticesFilter ({ setCurrentPage, setKeyWord }){

  const handleSearch = (searchTerm) => {
    setKeyWord(searchTerm);
    setCurrentPage(1);
  };

  return (
    <FilterContainer>
      <SearchField onSearch={handleSearch} width="265px" border="none" />
      <SelectorCategory />
      <SelectorGender />
    </FilterContainer>
  )
}