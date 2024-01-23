import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/albumPage/:albumID' element={<AlbumPage />} />
        <Route path='/artistPage/:artistID' element={<ArtistPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
