import { useState } from 'react';
import { Container, NoFavoritesText, NoFavoritesTextSpan, NoticesList, Tab, Tabs } from './MyNotices.styled';
import NoticesItem from 'components/NoticesItem/NoticesItem';
import { useSelector } from 'react-redux';
import { selectFavoritePets } from '../../redux/petLove/selector';

export default function MyNotices() {
  const [activeTab, setActiveTab] = useState('favorites');
  let favoritesList = useSelector(selectFavoritePets);
  // let noticesInf = useSelector(selectNoticesInf);
  console.log(favoritesList)

  // console.log(noticesInf)

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <Container>
      <Tabs>
        <Tab isActive={activeTab === 'favorites'} onClick={() => handleTabClick('favorites')}>
          My favorite pets
        </Tab>
        <Tab isActive={activeTab === 'viewed'} onClick={() => handleTabClick('viewed')}>
          Viewed
        </Tab>
      </Tabs>

      <NoticesList>
      {activeTab === 'favorites' && (
          favoritesList.length > 0 ? (
            favoritesList.map((notice) => (
              <NoticesItem key={notice.id} card={notice} />
            ))
          ) : (
            <NoFavoritesText>Oops, <NoFavoritesTextSpan>looks like there aren't any furries</NoFavoritesTextSpan> on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.</NoFavoritesText>
          )
        )}
        {activeTab === 'viewed' && (
          <p>ppppppp</p>
        )}
      </NoticesList>
    </Container>
  );
}