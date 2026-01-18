import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="hakkimizda" element={<AboutPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="hizmetler" element={<ServicesPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="isbirlikleri" element={<PartnershipsPage />} />
            <Route path="partnerships" element={<PartnershipsPage />} />
            <Route path="iletisim" element={<ContactPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
