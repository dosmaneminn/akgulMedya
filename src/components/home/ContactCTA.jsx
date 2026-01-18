import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import './ContactCTA.css';

const ContactCTA = () => {
    return (
        <section className="contact-cta">
            <div className="container">
                <div className="cta-content">
                    <div className="cta-text">
                        <h2>Projenizi Hayata Geçirelim</h2>
                        <p>
                            Dijital varlığınızı güçlendirmek için doğru yerdesiniz.
                            Profesyonel ekibimiz, projenizi en yüksek standartlarda hayata geçirmek için hazır.
                        </p>
                    </div>
                    <div className="cta-actions">
                        <Link to="/iletisim" className="btn btn-primary">
                            Ücretsiz Teklif Al
                            <FaArrowRight />
                        </Link>
                        <a href="tel:+905001234567" className="btn btn-secondary">
                            <FaPhone />
                            Hemen Ara
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
