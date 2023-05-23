import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import ShowMore from './components/ShowMore';
import FavoritePage from './pages/FavoritePage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import { viewAllCards } from './redux/api/viewSlice/viewSlice';
import { useAppDispatch } from './redux/hooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(viewAllCards());
  }, []);

  return (
    <Container>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/more" element={<ShowMore />} />
      </Routes>
    </Container>
  );
}
export default App;
