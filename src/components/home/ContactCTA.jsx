import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import './ContactCTA.css';

const ContactCTA = () => {
    const { t, language } = useLanguage();

    return (
        <section className="contact-cta section">
            <div className="cta-bg"></div>
            <div className="container">
                <div className="cta-content">
                    <h2>{t.cta.title}</h2>
                    <p>{t.cta.subtitle}</p>
                    <Link to={language === 'tr' ? '/iletisim' : '/contact'} className="btn btn-primary btn-lg">
                        {t.cta.button}
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
