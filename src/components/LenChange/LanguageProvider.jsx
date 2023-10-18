import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // State to store the selected language, defaulting to 'en' (English)
    const [language, setLanguage] = useState('en');

    // Function to handle language selection and update the language state
    const handleSelect = (lang) => {
        setLanguage(lang);
    };

    return (
        <>
            {/* 
            LanguageContext.Provider component provides language state and selection function to its children.
            This allows other components to access and modify the selected language.
            */}
            <LanguageContext.Provider value={{ language, handleSelect }}>
                {children}
            </LanguageContext.Provider>
        </>
    );
}