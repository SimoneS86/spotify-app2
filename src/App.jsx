import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHome from './Components/MyHome';
import MyArtistPage from './Components/MyArtistPage';
import MyAlbumPage from './Components/MyAlbumPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/album/:id" element={<MyAlbumPage />} />
          <Route path="/artist/:id" element={<MyArtistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
