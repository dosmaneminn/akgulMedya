import { Link } from 'react-router-dom';
import { FaGlobe, FaChartLine, FaHashtag, FaVideo, FaShoppingCart, FaPalette, FaArrowRight } from 'react-icons/fa';
import './ServicesPreview.css';

const ServicesPreview = () => {
    const iconMap = {
        FaGlobe: <FaGlobe />,
        FaChartLine: <FaChartLine />,
        FaHashtag: <FaHashtag />,
        FaVideo: <FaVideo />,
        FaShoppingCart: <FaShoppingCart />,
        FaPalette: <FaPalette />
    };

    const services = [
        {
            slug: 'kurumsal-web-tasarim',
            title: 'Kurumsal Web Tasarım',
            description: 'Türkiye\'deki küçük büyük tüm işletmeler için %100 SEO uyumlu, hızı optimize edilmiş web sitesi çözümleri.',
            icon: 'FaGlobe'
        },
        {
            slug: 'seo-dijital-pazarlama',
            title: 'SEO & Dijital Pazarlama',
            description: 'Google aramalarında rakiplerinizin önüne geçin. Teknik SEO, yerel SEO ve Google Ads yönetimi.',
            icon: 'FaChartLine'
        },
        {
            slug: 'sosyal-medya-yonetimi',
            title: 'Sosyal Medya Yönetimi',
            description: 'Facebook, Instagram, LinkedIn ve TikTok gibi platformlarda markanızın yönetimini üstleniyoruz.',
            icon: 'FaHashtag'
        },
        {
            slug: 'produksiyon-hizmeti',
            title: 'Prodüksiyon Hizmeti',
            description: 'Prodüksiyon ve post prodüksiyon hizmetlerimiz ile markanızın dijitaldeki imajını taşıyoruz.',
            icon: 'FaVideo'
        },
        {
            slug: 'e-ticaret-cozumleri',
            title: 'E-Ticaret Çözümleri',
            description: 'Güvenli ödeme altyapıları, pazaryeri entegrasyonları ve gelişmiş sepet modülleri.',
            icon: 'FaShoppingCart'
        },
        {
            slug: 'marka-danismanligi',
            title: 'Marka Danışmanlığı',
            description: 'Markanızı baştan aşağıya ele alarak tüm ihtiyaçlarınıza tek çatı altından çözümler sunuyoruz.',
            icon: 'FaPalette'
        }
    ];

    return (
        <section className="services-preview section">
            <div className="container">
                <div className="section-title">
                    <h2>Dijital Çözüm Alanlarımız</h2>
                    <p>
                        Markanızı geleceğe taşıyacak mobil uyumlu web siteleri, özel yazılımlar ve e-ticaret platformları tasarlıyoruz.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={`/hizmetler/${service.slug}`}
                            className="service-card"
                        >
                            <div className="service-icon">
                                {iconMap[service.icon]}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <span className="service-link">
                                Detaylı İncele <FaArrowRight />
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="services-cta">
                    <Link to="/hizmetler" className="btn btn-primary">
                        Tüm Hizmetlerimiz
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
