import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile';
import ChangeProfile from './Components/ChangeProfile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/changeprofile" element={<ChangeProfile />} />
      </Routes>
    </>
  );
}

export default App;
