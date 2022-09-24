import { Route, Routes } from 'react-router-dom';
import './App.scss';
import DataPage from './pages/DataPage';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SetPicPage from './pages/SetPicPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register/step2" element={<DataPage />} />
      <Route path="/register/step3" element={<SetPicPage />} />
    </Routes>
  );
}

export default App;
