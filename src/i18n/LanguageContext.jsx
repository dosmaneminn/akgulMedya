import { createContext, useContext, useState, useEffect } from 'react';
import tr from './tr';
import en from './en';

const translations = { tr, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('language');
        return saved || 'tr';
    });

    const t = translations[language];

    const toggleLanguage = () => {
        const newLang = language === 'tr' ? 'en' : 'tr';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    const setLang = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
