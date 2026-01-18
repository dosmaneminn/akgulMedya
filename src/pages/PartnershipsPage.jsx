import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { partnerships, partnershipCategories } from '../data/partnerships';
import './PartnershipsPage.css';

const PartnershipsPage = () => {
    const { t, language } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('Tümü');

    // Reset category on language change
    useEffect(() => {
        setSelectedCategory(language === 'tr' ? 'Tümü' : 'All');
    }, [language]);

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

    const enToTrCategories = Object.fromEntries(
        Object.entries(trToEnCategories).map(([tr, en]) => [en, tr])
    );

    // Get categories based on language
    const displayCategories = language === 'tr'
        ? partnershipCategories
        : partnershipCategories.map(cat => trToEnCategories[cat] || cat);

    // Filter partnerships
    const filteredPartnerships = partnerships.filter(partner => {
        // Get the TR category for comparison (data is in TR)
        const categoryToMatch = language === 'tr' ? selectedCategory : enToTrCategories[selectedCategory];
        const matchesCategory = selectedCategory === 'Tümü' || selectedCategory === 'All' || partner.category === categoryToMatch;
        return matchesCategory;
    });

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
                    <span className="partnership-count">{language === 'tr' ? 'Toplam' : 'Total'}: {filteredPartnerships.length}</span>
                </div>
            </div>

            <section className="partnerships-content section">
                <div className="container">
                    <div className="filter-bar">
                        <div className="category-filters">
                            {displayCategories.map((category, index) => (
                                <button
                                    key={category}
                                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="partnerships-grid">
                        {filteredPartnerships.map((partner) => (
                            <div key={partner.id} className="partnership-card">
                                <div className="partnership-image">
                                    <img src={partner.image} alt={partner.title} />
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
