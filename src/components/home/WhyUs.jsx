import { FaUsers, FaLaptopCode, FaHeadset, FaChartBar } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import { useInView } from '../../hooks/useInView';
import './WhyUs.css';

const WhyUs = () => {
    const { t } = useLanguage();
    const [sectionRef, isInView] = useInView({ threshold: 0.1 });

    const features = [
        { key: 'expert', icon: <FaUsers /> },
        { key: 'modern', icon: <FaLaptopCode /> },
        { key: 'support', icon: <FaHeadset /> },
        { key: 'result', icon: <FaChartBar /> }
    ];

    return (
        <section className="why-us section" ref={sectionRef}>
            <div className="container">
                <div className={`section-header reveal ${isInView ? 'visible' : ''}`}>
                    <h2>{t.whyUs.title}</h2>
                    <p>{t.whyUs.subtitle}</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.key}
                            className={`feature-card reveal stagger-${index + 1} ${isInView ? 'visible' : ''}`}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{t.whyUs.items[feature.key].title}</h3>
                            <p>{t.whyUs.items[feature.key].desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
