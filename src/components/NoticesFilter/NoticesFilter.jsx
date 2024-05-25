import SearchField from "components/SearchField/SearchField";
import { FilterContainer } from "./NoticesFilter.styled";

export default function NoticesFilter ({ setCurrentPage, setKeyWord }){
  const handleSearch = (searchTerm) => {
    setKeyWord(searchTerm);
    setCurrentPage(1);
    console.log("gggggggggggg")
  };

  return (
    <FilterContainer>
      <SearchField onSearch={handleSearch}/>
      filters
    </FilterContainer>
  )
}