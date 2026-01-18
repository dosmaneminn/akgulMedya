import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { partnerships, partnershipCategories } from '../data/partnerships';
import './PartnershipsPage.css';

const PartnershipsPage = () => {
    const [filter, setFilter] = useState('Tümü');
    const [search, setSearch] = useState('');

    const filteredPartnerships = partnerships.filter(p => {
        const matchCategory = filter === 'Tümü' || p.category === filter;
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="partnerships-page">
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Anasayfa</Link>
                        <span>/</span>
                        <span>İş Birlikleri</span>
                    </div>
                    <h1>İş Birliklerimiz</h1>
                    <p>Başarıyla tamamladığımız iş birlikleri ve projelerimiz</p>
                    <span className="partnership-count">Toplam: {partnerships.length} iş birliği</span>
                </div>
            </div>

            <section className="partnerships-content section">
                <div className="container">
                    <div className="partnerships-filters">
                        <div className="filter-categories">
                            {partnershipCategories.map(cat => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="filter-search">
                            <FaSearch />
                            <input
                                type="text"
                                placeholder="İş birliği ara..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="partnerships-grid">
                        {filteredPartnerships.map((partnership) => (
                            <div key={partnership.id} className="partnership-card">
                                <div className="partnership-image">
                                    <img
                                        src={partnership.image}
                                        alt={partnership.title}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="partnership-placeholder" style={{ display: 'none' }}>
                                        <FaHandshake />
                                    </div>
                                    <div className="partnership-overlay">
                                        <span className="partnership-category">{partnership.category}</span>
                                    </div>
                                </div>
                                <div className="partnership-info">
                                    <h3>{partnership.title}</h3>
                                    <p>{partnership.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPartnerships.length === 0 && (
                        <div className="no-results">
                            <p>Arama kriterlerine uygun iş birliği bulunamadı.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PartnershipsPage;
