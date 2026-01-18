import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // mailto: link ile form gönderimi
        const subject = encodeURIComponent(`[Web Formu] ${formData.subject || 'İletişim Formu'}`);
        const body = encodeURIComponent(
            `Ad Soyad: ${formData.name}\n` +
            `E-posta: ${formData.email}\n` +
            `Telefon: ${formData.phone || 'Belirtilmedi'}\n` +
            `Konu: ${formData.subject || 'Belirtilmedi'}\n\n` +
            `Mesaj:\n${formData.message}`
        );

        // E-posta uygulamasını aç
        window.location.href = `mailto:akgulmedya7@gmail.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 1000);
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Anasayfa</Link>
                        <span>/</span>
                        <span>İletişim</span>
                    </div>
                    <h1>İletişim</h1>
                    <p>Projeleriniz, demo talepleriniz veya fiyat teklifleriniz için bize ulaşın.</p>
                </div>
            </div>

            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Bize Yazın</h2>
                            <p className="form-desc">Formu doldurun, en kısa sürede size dönüş yapalım.</p>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Adınız Soyadınız *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-posta Adresiniz *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefon Numaranız</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Konu</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">Seçiniz</option>
                                            <option value="Web Tasarım">Web Tasarım</option>
                                            <option value="Sosyal Medya">Sosyal Medya Yönetimi</option>
                                            <option value="Prodüksiyon">Prodüksiyon</option>
                                            <option value="SEO">SEO</option>
                                            <option value="Logo Tasarım">Logo Tasarım</option>
                                            <option value="Diğer">Diğer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mesajınız *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Projeniz hakkında detaylı bilgi verin..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="spinner" /> Gönderiliyor...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Mesaj Gönder
                                        </>
                                    )}
                                </button>
                                {submitStatus === 'success' && (
                                    <div className="success-message">
                                        ✓ E-posta uygulamanız açıldı. Mesajınızı göndermek için "Gönder" butonuna tıklayın.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <h3>Bize Ulaşın</h3>
                            <p>Ofisimizi ziyaret edebilir veya bizi arayabilirsiniz.</p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <div className="info-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <h4>Adres</h4>
                                        <p>Muğla, Türkiye</p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><FaPhone /></div>
                                    <div>
                                        <h4>Telefon</h4>
                                        <a href="tel:+905301764835">+90 530 176 48 35</a>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div>
                                        <h4>E-posta</h4>
                                        <a href="mailto:akgulmedya7@gmail.com">akgulmedya7@gmail.com</a>
                                    </div>
                                </div>
                                <a href="https://wa.me/905301764835" target="_blank" rel="noopener noreferrer" className="info-card whatsapp-card">
                                    <div className="info-icon whatsapp"><FaWhatsapp /></div>
                                    <div>
                                        <h4>WhatsApp</h4>
                                        <span>Hemen Yazın</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
