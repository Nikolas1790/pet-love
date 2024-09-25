import { ContentContainer, Title } from "common/GiobalStyles";
import { NoticesContainer } from "./Notices.styled";
import NoticesList from "components/NoticesList/NoticesList";
import NoticesFilter from "components/NoticesFilter/NoticesFilter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noticesInf } from "../../redux/petLove/operations";
import { selectNoticesInf } from "../../redux/petLove/selector";
import { Pagination } from "components/Pagination/Pagination";

export default function Notices() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [locationId, setLocationId] = useState("");
  const [sortCriteria, setSortCriteria] = useState({ popular: null, price: null });
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const noticesData = useSelector(selectNoticesInf);  

  const anyFilterSelected = selectedCategory || selectedType || selectedGender || locationId || sortCriteria.popular !== null || sortCriteria.price !== null || keyword;

  const handleResetFilters = () => {
    setSelectedCategory("");
    setSelectedType("");
    setSelectedGender("");
    setLocationId("");
    setSortCriteria({ popular: null, price: false });
    setKeyword("");
    setCurrentPage(1);
    console.log("ggggggggggggggggggggggggggggggg")
  };


  const getCategory = (article) => {
    if (article === "Show all") {
      return '';
    }
    return article.toLowerCase();
  };

  useEffect(() => {
    const category = getCategory(selectedCategory);
    const species = getCategory(selectedType);
    const sex = getCategory(selectedGender);

    dispatch(noticesInf({
      keyword, 
      byDate: true, 
      page: currentPage, 
      limit: 6, 
      category, 
      species, 
      sex, 
      locationId, 
      byPrice: sortCriteria.price, 
      byPopularity: sortCriteria.popular
    }));
  }, [dispatch, currentPage, keyword, selectedCategory, selectedType, selectedGender, locationId, sortCriteria.price, sortCriteria.popular]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const handleLocationChange = (selectedLocation) => {
    setLocationId(selectedLocation.id)
    console.log('Selected location:', selectedLocation.id);
  };
  
  return (
    <ContentContainer>
      <NoticesContainer>
        <Title>Find your favorite pet</Title>
        <NoticesFilter 
          setCurrentPage={setCurrentPage} 
          setKeyword={setKeyword} 
          setSelectedCategory={setSelectedCategory}
          setSelectedType={setSelectedType}
          setSelectedGender={setSelectedGender}
          onLocationChange={handleLocationChange}
          setSortCriteria={setSortCriteria}
          anyFilterSelected={anyFilterSelected}
          handleResetFilters={handleResetFilters}
        />

        <div>
          <NoticesList noticesData={noticesData} />    
          <Pagination
            currentPage={noticesData.page}
            totalPages={noticesData.totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </NoticesContainer>
    </ContentContainer>
  );
}  