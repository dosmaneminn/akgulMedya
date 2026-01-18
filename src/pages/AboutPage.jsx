import { Link } from 'react-router-dom';
import { FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import './AboutPage.css';

const AboutPage = () => {
    const { t, language } = useLanguage();

    if (!t) return null;

    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">{t.nav.home}</Link>
                        <span>/</span>
                        <span>{t.nav.about}</span>
                    </div>
                    <h1>{t.about.title}</h1>
                    <p>{t.about.subtitle}</p>
                </div>
            </div>

            <section className="about-content section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>{language === 'tr' ? 'Biz Kimiz?' : 'Who Are We?'}</h2>
                            <p>
                                {language === 'tr'
                                    ? 'Akgul Medya, dijital dünyada markaların hikayelerini anlatmalarına yardımcı olan yaratıcı bir ajans olarak 2024 yılında kurulmuştur. Web tasarımından sosyal medya yönetimine, SEO\'dan video prodüksiyona kadar geniş bir yelpazede hizmet sunuyoruz.'
                                    : 'Akgul Medya was founded in 2024 as a creative agency that helps brands tell their stories in the digital world. We offer a wide range of services from web design to social media management, SEO to video production.'
                                }
                            </p>
                            <p>
                                {language === 'tr'
                                    ? 'Müşterilerimizin dijital dönüşüm süreçlerinde güvenilir bir ortak olmayı hedefliyoruz. Modern teknolojiler ve yaratıcı çözümlerle işletmelerin büyümesine katkı sağlıyoruz.'
                                    : 'We aim to be a reliable partner in our customers\' digital transformation processes. We contribute to the growth of businesses with modern technologies and creative solutions.'
                                }
                            </p>
                        </div>
                    </div>

                    {/* Philosophy Cards */}
                    <div className="philosophy-section">
                        <h2 className="section-title">{language === 'tr' ? 'Değerlerimiz' : 'Our Values'}</h2>
                        <div className="philosophy-grid">
                            <div className="philosophy-card">
                                <div className="philosophy-icon"><FaLightbulb /></div>
                                <h3>{language === 'tr' ? 'Yenilikçi Yaklaşım' : 'Innovative Approach'}</h3>
                                <p>{language === 'tr' ? 'Güncel trendleri ve teknolojileri yakından takip ederek projelerinize en yenilikçi çözümleri sunuyoruz.' : 'We offer the most innovative solutions for your projects by following current trends and technologies.'}</p>
                            </div>
                            <div className="philosophy-card">
                                <div className="philosophy-icon"><FaUsers /></div>
                                <h3>{language === 'tr' ? 'Müşteri Odaklı' : 'Customer Focused'}</h3>
                                <p>{language === 'tr' ? 'Her projeyi müşterimizin ihtiyaçlarına göre özelleştiriyor, birlikte başarıya ulaşıyoruz.' : 'We customize each project according to our customer\'s needs and achieve success together.'}</p>
                            </div>
                            <div className="philosophy-card">
                                <div className="philosophy-icon"><FaChartLine /></div>
                                <h3>{language === 'tr' ? 'Sonuç Odaklı' : 'Result Oriented'}</h3>
                                <p>{language === 'tr' ? 'Ölçülebilir başarılar elde etmeye odaklanıyor, ROI\'nizi maksimize ediyoruz.' : 'We focus on achieving measurable success and maximize your ROI.'}</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Box */}
                    {/* CTA Box Removed as per request */}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
