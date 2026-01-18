import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: 'Akgul Medya, kurumsal web sitemizi tam da hayal ettiğimiz gibi tasarladı. Mobil uyumlu ve modern arayüzü sayesinde müşteri etkileşimlerimiz arttı.',
            name: 'Ahmet Yılmaz',
            title: 'Genel Müdür',
            company: 'ABC Holding'
        },
        {
            quote: 'İhtiyaçlarımıza özel geliştirdikleri CRM yazılımı sayesinde tüm satış ve operasyon süreçlerimizi tek bir platformdan yönetebiliyoruz.',
            name: 'Zeynep Kaya',
            title: 'IT Direktörü',
            company: 'TechCorp'
        },
        {
            quote: 'E-ticaret sitemizi PayTR entegrasyonlu olarak sıfırdan kurdular. Kolay yönetim paneli sayesinde siparişlerimizi sorunsuz yönetiyoruz.',
            name: 'Mehmet Öztürk',
            title: 'E-Ticaret Müdürü',
            company: 'ModaMart'
        },
        {
            quote: 'Profesyonel SEO hizmetleri sayesinde Google\'da ilk sayfaya yükseldik. Organik trafiğimizde sadece 6 ayda %150 artış sağladılar.',
            name: 'Elif Sancak',
            title: 'Pazarlama Müdürü',
            company: 'GrowthCo'
        },
        {
            quote: 'Sunucu barındırma ve teknik bakım hizmetleri sayesinde web sitelerimiz artık çok daha hızlı ve güvende. 7/24 kesintisiz destek.',
            name: 'Burak Tuncel',
            title: 'CTO',
            company: 'DataSoft'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials section">
            <div className="container">
                <div className="section-title">
                    <h2>Müşterilerimiz Ne Dedi?</h2>
                    <p>
                        Başarıya ulaştırdığımız projelerimiz ve dijital dönüşüm yolculuğunda bize güvenen iş ortaklarımızın görüşleri.
                    </p>
                </div>

                <div className="testimonials-wrapper">
                    <button className="nav-btn prev" onClick={prevSlide}>
                        <FaChevronLeft />
                    </button>

                    <div className="testimonials-slider">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className={`testimonial-card ${currentIndex === index ? 'active' : ''}`}
                            >
                                <FaQuoteLeft className="quote-icon" />
                                <p className="quote-text">{item.quote}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <h4>{item.name}</h4>
                                        <span>{item.title}, {item.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn next" onClick={nextSlide}>
                        <FaChevronRight />
                    </button>
                </div>

                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
