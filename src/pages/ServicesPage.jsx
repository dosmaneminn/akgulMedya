import { Link } from 'react-router-dom';
import { FaQrcode, FaPlane, FaGlobe, FaVideo, FaRobot, FaCamera, FaHashtag, FaBullhorn, FaChartLine, FaStar, FaPalette, FaCrown } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import './ServicesPage.css';

const ServicesPage = () => {
    const { t, language } = useLanguage();

    const services = [
        { key: 'qrMenu', icon: <FaQrcode /> },
        { key: 'drone', icon: <FaPlane /> },
        { key: 'webDesign', icon: <FaGlobe /> },
        { key: 'production', icon: <FaVideo /> },
        { key: 'n8n', icon: <FaRobot /> },
        { key: 'photo', icon: <FaCamera /> },
        { key: 'socialMedia', icon: <FaHashtag /> },
        { key: 'metaAds', icon: <FaBullhorn /> },
        { key: 'seo', icon: <FaChartLine /> },
        { key: 'googleReview', icon: <FaStar /> },
        { key: 'logo', icon: <FaPalette /> },
        { key: 'brand', icon: <FaCrown /> }
    ];

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">{t.nav.home}</Link>
                        <span>/</span>
                        <span>{t.nav.services}</span>
                    </div>
                    <h1>{t.services.title}</h1>
                    <p>{t.services.subtitle}</p>
                    <span className="service-count">{t.services.total}: {services.length}</span>
                </div>
            </div>

            <section className="services-list section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.key} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{t.services.items[service.key].title}</h3>
                                <p>{t.services.items[service.key].desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
