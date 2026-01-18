import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const quickLinks = [
        { path: '/hakkimizda', label: 'Hakkımızda' },
        { path: '/hizmetler', label: 'Hizmetlerimiz' },
        { path: '/isbirlikleri', label: 'İş Birlikleri' },
        { path: '/iletisim', label: 'İletişim' }
    ];

    const services = [
        { path: '/hizmetler/web-tasarimi', label: 'Web Tasarımı' },
        { path: '/hizmetler/sosyal-medya-yonetimi', label: 'Sosyal Medya' },
        { path: '/hizmetler/seo', label: 'SEO' },
        { path: '/hizmetler/produksiyon', label: 'Prodüksiyon' },
        { path: '/hizmetler/logo-tasarimi', label: 'Logo Tasarımı' }
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
                            <p className="footer-desc">
                                Dijital dünyanın öncü ajansı olarak, markanızı geleceğe taşıyoruz.
                                360 derece dijital çözümlerle büyümenize katkı sağlıyoruz.
                            </p>
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
                            <h4>Hızlı Menü</h4>
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
                            <h4>Hizmetlerimiz</h4>
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
                            <h4>Bize Ulaşın</h4>
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
                        <p>© 2026 Akgul Medya. Tüm Hakları Saklıdır.</p>
                        <div className="footer-legal">
                            <Link to="/kvkk">KVKK</Link>
                            <Link to="/gizlilik">Gizlilik Politikası</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
