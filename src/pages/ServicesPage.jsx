import { Link } from 'react-router-dom';
import { FaQrcode, FaPlane, FaGlobe, FaVideo, FaRobot, FaCamera, FaHashtag, FaBullhorn, FaChartLine, FaStar, FaPalette, FaCrown, FaArrowRight } from 'react-icons/fa';
import { services } from '../data/services';
import './ServicesPage.css';

const ServicesPage = () => {
    const iconMap = {
        FaQrcode: <FaQrcode />,
        FaPlane: <FaPlane />,
        FaGlobe: <FaGlobe />,
        FaVideo: <FaVideo />,
        FaRobot: <FaRobot />,
        FaCamera: <FaCamera />,
        FaHashtag: <FaHashtag />,
        FaBullhorn: <FaBullhorn />,
        FaChartLine: <FaChartLine />,
        FaStar: <FaStar />,
        FaPalette: <FaPalette />,
        FaCrown: <FaCrown />
    };

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Anasayfa</Link>
                        <span>/</span>
                        <span>Hizmetlerimiz</span>
                    </div>
                    <h1>Hizmetlerimiz</h1>
                    <p>Dijital dünyanın tüm ihtiyaçlarınız için profesyonel çözümler sunuyoruz.</p>
                    <span className="service-count">Toplam: {services.length} hizmet</span>
                </div>
            </div>

            <section className="services-list section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">{iconMap[service.icon]}</div>
                                <h3>{service.title}</h3>
                                <p>{service.shortDesc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
