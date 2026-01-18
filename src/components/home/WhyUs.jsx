import { FaUsers, FaLaptopCode, FaHeadset, FaChartBar } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import './WhyUs.css';

const WhyUs = () => {
    const { t } = useLanguage();

    const features = [
        { key: 'expert', icon: <FaUsers /> },
        { key: 'modern', icon: <FaLaptopCode /> },
        { key: 'support', icon: <FaHeadset /> },
        { key: 'result', icon: <FaChartBar /> }
    ];

    return (
        <section className="why-us section">
            <div className="container">
                <div className="section-header">
                    <h2>{t.whyUs.title}</h2>
                    <p>{t.whyUs.subtitle}</p>
                </div>
                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.key} className="feature-card">
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
