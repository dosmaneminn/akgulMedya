import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import './ContactPage.css';

const ContactPage = () => {
    const { t, language } = useLanguage();
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

        const subject = encodeURIComponent(`[Web Form] ${formData.subject || 'Contact Form'}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Subject: ${formData.subject || 'Not provided'}\n\n` +
            `Message:\n${formData.message}`
        );

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
                        <Link to="/">{t.nav.home}</Link>
                        <span>/</span>
                        <span>{t.nav.contact}</span>
                    </div>
                    <h1>{t.contact.title}</h1>
                    <p>{t.contact.subtitle}</p>
                </div>
            </div>

            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>{t.contact.form.title}</h2>
                            <p className="form-desc">{t.contact.form.subtitle}</p>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">{t.contact.form.name} *</label>
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
                                        <label htmlFor="email">{t.contact.form.email} *</label>
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
                                        <label htmlFor="phone">{t.contact.form.phone}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">{t.contact.form.subject}</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            {t.contact.subjects.map((subj, idx) => (
                                                <option key={idx} value={idx === 0 ? '' : subj}>{subj}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">{t.contact.form.message} *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.contact.form.placeholder}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="spinner" /> {t.contact.form.sending}
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> {t.contact.form.send}
                                        </>
                                    )}
                                </button>
                                {submitStatus === 'success' && (
                                    <div className="success-message">
                                        ✓ {t.contact.form.success}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <h3>{t.contact.info.title}</h3>
                            <p>{t.contact.info.subtitle}</p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <div className="info-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <h4>{t.contact.info.address}</h4>
                                        <p>Muğla, Türkiye</p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><FaPhone /></div>
                                    <div>
                                        <h4>{t.contact.info.phone}</h4>
                                        <a href="tel:+905301764835">+90 530 176 48 35</a>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div>
                                        <h4>{t.contact.info.email}</h4>
                                        <a href="mailto:akgulmedya7@gmail.com">akgulmedya7@gmail.com</a>
                                    </div>
                                </div>
                                <a href="https://wa.me/905301764835" target="_blank" rel="noopener noreferrer" className="info-card whatsapp-card">
                                    <div className="info-icon whatsapp"><FaWhatsapp /></div>
                                    <div>
                                        <h4>WhatsApp</h4>
                                        <span>{t.contact.info.whatsapp}</span>
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
