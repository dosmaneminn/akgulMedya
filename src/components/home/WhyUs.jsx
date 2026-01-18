import { FaCheckCircle, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import './WhyUs.css';

const WhyUs = () => {
    const features = [
        {
            icon: <FaCheckCircle />,
            title: 'Özelleştirilmiş Çözümler',
            description: 'İşletmenize, sektörünüze ve hedeflerinize uygun stratejik ve esnek çözümler üretiriz.'
        },
        {
            icon: <FaUsers />,
            title: 'Uzman Ekip',
            description: 'Yazılım, medya satın alma, kreatif ve analiz ekiplerimiz aynı hedefe odaklanır.'
        },
        {
            icon: <FaChartLine />,
            title: 'Şeffaf Raporlama',
            description: 'Şeffaf raporlama ve düzenli optimizasyon ile yatırımınızın gerçek etkisini görün.'
        },
        {
            icon: <FaHandshake />,
            title: 'Uzun Vadeli Ortaklık',
            description: 'Güvenilirlik, hız ve kaliteyi esas alır; uzun vadeli iş ortaklığı yaklaşımıyla yanınızda oluruz.'
        }
    ];

    return (
        <section className="why-us section">
            <div className="container">
                <div className="section-title">
                    <h2>Neden Akgul Medya?</h2>
                    <p>
                        Dijital dönüşüm yolculuğunuzda güvenebileceğiniz bir partner arıyorsanız,
                        doğru yerdesiniz.
                    </p>
                </div>

                <div className="why-us-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="why-us-card">
                            <div className="why-us-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
