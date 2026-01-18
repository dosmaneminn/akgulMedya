import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hakkimizda" element={<AboutPage />} />
          <Route path="hizmetler" element={<ServicesPage />} />
          <Route path="hizmetler/:slug" element={<ServicesPage />} />
          <Route path="isbirlikleri" element={<PartnershipsPage />} />
          <Route path="iletisim" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
