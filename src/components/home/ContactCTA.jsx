import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import { useInView } from '../../hooks/useInView';
import './ContactCTA.css';

const ContactCTA = () => {
    const { t, language } = useLanguage();
    const [sectionRef, isInView] = useInView({ threshold: 0.2 });

    return (
        <section className="contact-cta section" ref={sectionRef}>
            <div className="cta-bg"></div>
            <div className="container">
                <div className={`cta-content reveal-scale ${isInView ? 'visible' : ''}`}>
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
