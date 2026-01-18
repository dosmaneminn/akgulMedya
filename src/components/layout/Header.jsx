import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [language, setLanguage] = useState('TR');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleLanguage = () => {
        setLanguage(language === 'TR' ? 'EN' : 'TR');
    };

    const menuItems = [
        { path: '/', label: 'Ana Sayfa' },
        {
            path: '/hakkimizda',
            label: 'Kurumsal',
            dropdown: [
                { path: '/hakkimizda', label: 'Hakkımızda' },
                { path: '/hakkimizda#misyon', label: 'Misyon & Vizyon' }
            ]
        },
        { path: '/hizmetler', label: 'Hizmetlerimiz' },
        { path: '/isbirlikleri', label: 'İş Birlikleri' },
        { path: '/iletisim', label: 'İletişim' }
    ];

    return (
        <>
            {/* Top Bar - Contact Only */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-content">
                        <div className="top-bar-contact">
                            <a href="tel:+905301764835">
                                <FaPhone /> +90 530 176 48 35
                            </a>
                            <a href="mailto:akgulmedya7@gmail.com">
                                <FaEnvelope /> akgulmedya7@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <nav className="nav">
                        <Link to="/" className="logo">
                            <span className="logo-text">Akgul</span>
                            <span className="logo-highlight">Medya</span>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="nav-menu">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        to={item.path}
                                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                    >
                                        {item.label}
                                        {item.dropdown && <FaChevronDown className="dropdown-icon" />}
                                    </Link>

                                    {item.dropdown && (
                                        <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={subItem.path}>{subItem.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="nav-actions">
                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/905301764835"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-btn"
                                title="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>

                            {/* Language Toggle */}
                            <button className="language-toggle" onClick={toggleLanguage}>
                                <FaGlobe />
                                <span>{language}</span>
                            </button>

                            <button
                                className="mobile-menu-btn"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-menu">
                        {menuItems.map((item, index) => (
                            <li key={index} className="mobile-nav-item">
                                <Link to={item.path} className="mobile-nav-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-actions">
                        <a
                            href="https://wa.me/905301764835"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
