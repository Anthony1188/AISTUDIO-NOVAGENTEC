import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommercialPage from './pages/CommercialPage';
import GovAeroPage from './pages/GovAeroPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/commercial" element={<CommercialPage />} />
      <Route path="/government-aerospace" element={<GovAeroPage />} />
    </Routes>
  );
}
