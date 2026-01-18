import { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        t.services.items.qrMenu.title,
        t.services.items.drone.title,
        t.services.items.webDesign.title,
        t.services.items.production.title,
        t.services.items.n8n.title,
        t.services.items.photo.title,
        t.services.items.socialMedia.title,
        t.services.items.metaAds.title,
        t.services.items.seo.title,
        t.services.items.googleReview.title,
        t.services.items.logo.title,
        t.services.items.brand.title
    ];

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-image" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-gradient"></div>
            </div>

            <div className="container">
                <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
                    <h1 className="hero-title">{t.hero.title}</h1>
                    <p className="hero-subtitle">{t.hero.subtitle}</p>
                </div>

                {/* Marquee Services */}
                <div className={`hero-marquee ${isLoaded ? 'loaded' : ''}`}>
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
