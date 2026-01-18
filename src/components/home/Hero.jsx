import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const services = [
        'QR Menü',
        'Drone Çekimi',
        'Web Tasarımı',
        'Prodüksiyon',
        'n8n Otomasyonları',
        'Fotoğraf & Video Çekimi',
        'Sosyal Medya Yönetimi',
        'Meta Reklamları',
        'SEO',
        'Google Yorum Desteği',
        'Logo Tasarımı',
        'Marka Yönetimi'
    ];

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-image" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-gradient"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <h1>Dijitalde Sınırları Aş</h1>
                    <p>
                        Akgul Medya, markanızı bugünden geleceğe taşıyan tam kapsamlı dijital çözüm ortağınız.
                        Strateji, tasarım ve teknolojiyi birleştirerek işinizi büyüten çözümler üretiyoruz.
                    </p>
                </div>

                {/* Marquee Services */}
                <div className="hero-marquee">
                    <div className="marquee-track">
                        {[...services, ...services].map((service, index) => (
                            <span key={index} className="marquee-item">
                                {service}
                                <span className="marquee-dot">•</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
