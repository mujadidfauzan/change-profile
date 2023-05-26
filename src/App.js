import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile';
import ChangeProfile from './Components/ChangeProfile';
import { Route, Routes } from 'react-router-dom';
import GaleriPage from './Components/GaleriPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/changeprofile" element={<ChangeProfile />} />
        <Route path="/galeri" element={<GaleriPage />} />
      </Routes>
    </>
  );
}

export default App;
