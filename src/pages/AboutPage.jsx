import { Link } from 'react-router-dom';
import { FaCheckCircle, FaLightbulb, FaCogs, FaChartBar, FaHandshake } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
    const philosophy = [
        { icon: <FaLightbulb />, title: 'Analiz', desc: 'İşinizi, hedef kitlenizi ve rakiplerinizi derinlemesine analiz ederek başlarız.' },
        { icon: <FaCogs />, title: 'Planlama', desc: 'Veriye dayalı stratejiler ve yol haritaları oluştururuz.' },
        { icon: <FaCheckCircle />, title: 'Üretim', desc: 'Tasarım, yazılım ve içerik üretimini en yüksek standartlarda gerçekleştiririz.' },
        { icon: <FaChartBar />, title: 'Ölçümleme', desc: 'Sonuçları ölçer, raporlar ve sürekli optimizasyon yaparız.' }
    ];

    return (
        <div className="about-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Anasayfa</Link>
                        <span>/</span>
                        <span>Hakkımızda</span>
                    </div>
                    <h1>Hakkımızda</h1>
                    <p>Akgul Medya olarak dijitalde görünür olmayı bir hedef değil, ölçülebilir büyümeye giden yolun doğal sonucu olarak görüyoruz.</p>
                </div>
            </div>

            {/* About Content */}
            <section className="about-content section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Bizim Yaklaşımımız</h2>
                            <p>
                                Strateji, kreatif, yazılım ve performansı aynı masada birleştiren bir büyüme partneri gibi çalışırız.
                                İstanbul merkezli bir ajansız; ama işimizi yalnızca bir lokasyona sığdırmayız.
                            </p>
                            <p>
                                Yerel markalardan ulusal ölçeğe, e-ticaretten B2B yapılara, hizmet sektöründen çok lokasyonlu markalara kadar
                                farklı ihtiyaçlara sahip işletmelerle çalışırız. Her işte tek bir ortak çizgimiz var:
                                "Güzel görünsün" ile yetinmeyiz; "işe yarasın, büyütsün, sürdürülebilir olsun" isteriz.
                            </p>
                            <ul className="about-features">
                                <li><FaCheckCircle /> 150+ Tamamlanan Proje</li>
                                <li><FaCheckCircle /> 50+ Mutlu Müşteri</li>
                                <li><FaCheckCircle /> 5+ Yıllık Deneyim</li>
                                <li><FaCheckCircle /> 24/7 Destek Hizmeti</li>
                            </ul>
                        </div>
                        <div className="about-image">
                            <div className="image-placeholder">
                                <FaHandshake />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy section" id="misyon">
                <div className="container">
                    <div className="section-title">
                        <h2>Çalışma Felsefemiz</h2>
                        <p>Önce analiz ederiz, sonra planlarız, sonra üretiriz, en sonunda da ölçeriz. Bu döngü asla bitmez.</p>
                    </div>

                    <div className="philosophy-grid">
                        {philosophy.map((item, index) => (
                            <div key={index} className="philosophy-card">
                                <div className="philosophy-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Dijital Büyüme Yolculuğunuza Başlayın</h2>
                        <p>Projelerinizi hayata geçirmek için ekibimizle iletişime geçin.</p>
                        <Link to="/iletisim" className="btn btn-primary">
                            İletişime Geç
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
