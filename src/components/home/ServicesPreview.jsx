import { Link } from 'react-router-dom';
import { FaGlobe, FaHashtag, FaVideo, FaChartLine, FaPalette, FaArrowRight, FaStar } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import { useInView } from '../../hooks/useInView';
import './ServicesPreview.css';

const ServicesPreview = () => {
    const { t, language } = useLanguage();
    const [sectionRef, isInView] = useInView({ threshold: 0.1 });

    const services = [
        { key: 'webDesign', icon: <FaGlobe /> },
        { key: 'socialMedia', icon: <FaHashtag /> },
        { key: 'production', icon: <FaVideo /> },
        { key: 'seo', icon: <FaChartLine /> },
        { key: 'logo', icon: <FaPalette /> },
        { key: 'googleReview', icon: <FaStar /> }
    ];

    return (
        <section className="services-preview section" ref={sectionRef}>
            <div className="container">
                <div className={`section-header reveal ${isInView ? 'visible' : ''}`}>
                    <span className="section-tag">{t.nav.services}</span>
                    <h2>{language === 'tr' ? 'Dijital Çözüm Alanlarımız' : 'Our Digital Solutions'}</h2>
                    <p>{t.services.subtitle}</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.key}
                            className={`service-card reveal stagger-${index + 1} ${isInView ? 'visible' : ''}`}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{t.services.items[service.key].title}</h3>
                            <p>{t.services.items[service.key].desc}</p>
                        </div>
                    ))}
                </div>
                <div className={`services-cta reveal stagger-6 ${isInView ? 'visible' : ''}`}>
                    <Link to={language === 'tr' ? '/hizmetler' : '/services'} className="btn btn-outline">
                        {language === 'tr' ? 'Tüm Hizmetlerimiz' : 'All Services'}
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
