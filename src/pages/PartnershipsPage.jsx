import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';
import { partnerships } from '../data/partnerships';
import './PartnershipsPage.css';

const PartnershipsPage = () => {
    const { t, language } = useLanguage();
    const [gridRef, isGridInView] = useInView({ threshold: 0.05 });

    // Category mapping for EN
    const trToEnCategories = {
        'Tümü': 'All',
        'Restoran': 'Restaurant',
        'Gıda': 'Food',
        'Kripto': 'Crypto',
        'Tasarım': 'Design',
        'Perakende': 'Retail',
        'Eğitim': 'Education'
    };

    return (
        <div className="partnerships-page">
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">{language === 'tr' ? 'Anasayfa' : 'Home'}</Link>
                        <span>/</span>
                        <span>{language === 'tr' ? 'İş Birlikleri' : 'Partnerships'}</span>
                    </div>
                    <h1>{language === 'tr' ? 'İş Birliklerimiz' : 'Our Partnerships'}</h1>
                    <p>{language === 'tr' ? 'Başarıyla tamamladığımız iş birlikleri ve projelerimiz' : 'Our successfully completed partnerships and projects'}</p>
                    <span className="partnership-count">{language === 'tr' ? 'Toplam' : 'Total'}: {partnerships.length}</span>
                </div>
            </div>

            <section className="partnerships-content section">
                <div className="container">
                    <div className="partnerships-grid" ref={gridRef}>
                        {partnerships.map((partner, index) => (
                            <div
                                key={partner.id}
                                className={`partnership-card reveal stagger-${(index % 6) + 1} ${isGridInView ? 'visible' : ''}`}
                            >
                                <div className="partnership-image">
                                    <img src={partner.image} alt={partner.title} />
                                    <div className="partnership-overlay">
                                        <span className="view-project">
                                            {language === 'tr' ? 'Projeyi Görüntüle' : 'View Project'}
                                        </span>
                                    </div>
                                </div>
                                <div className="partnership-info">
                                    <span className="partnership-category">
                                        {language === 'tr' ? partner.category : trToEnCategories[partner.category] || partner.category}
                                    </span>
                                    <h3>{partner.title}</h3>
                                    <p>{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnershipsPage;
