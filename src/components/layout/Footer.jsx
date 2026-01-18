import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t, language } = useLanguage();

    const quickLinks = [
        { path: language === 'tr' ? '/hakkimizda' : '/about', label: t.nav.about },
        { path: language === 'tr' ? '/hizmetler' : '/services', label: t.nav.services },
        { path: language === 'tr' ? '/isbirlikleri' : '/partnerships', label: t.nav.partnerships },
        { path: language === 'tr' ? '/iletisim' : '/contact', label: t.nav.contact }
    ];

    const services = [
        { path: language === 'tr' ? '/hizmetler' : '/services', label: t.services.items.webDesign.title },
        { path: language === 'tr' ? '/hizmetler' : '/services', label: t.services.items.socialMedia.title },
        { path: language === 'tr' ? '/hizmetler' : '/services', label: t.services.items.seo.title },
        { path: language === 'tr' ? '/hizmetler' : '/services', label: t.services.items.production.title },
        { path: language === 'tr' ? '/hizmetler' : '/services', label: t.services.items.logo.title }
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-column">
                            <Link to="/" className="footer-logo">
                                <span className="logo-text">Akgul</span>
                                <span className="logo-highlight">Medya</span>
                            </Link>
                            <p className="footer-desc">{t.footer.desc}</p>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4>{t.footer.quickMenu}</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-column">
                            <h4>{t.footer.services}</h4>
                            <ul className="footer-links">
                                {services.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-column">
                            <h4>{t.footer.contact}</h4>
                            <ul className="footer-contact">
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>Muğla, Türkiye</span>
                                </li>
                                <li>
                                    <FaPhone />
                                    <a href="tel:+905301764835">+90 530 176 48 35</a>
                                </li>
                                <li>
                                    <FaEnvelope />
                                    <a href="mailto:akgulmedya7@gmail.com">akgulmedya7@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>{t.footer.copyright}</p>
                        <div className="footer-legal">
                            <Link to="/kvkk">KVKK</Link>
                            <Link to="/gizlilik">{t.footer.privacy}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
