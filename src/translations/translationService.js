import enTrans from './en.json';
import arTrans from './ar.json';

const translations = {
    en: enTrans,
    ar: arTrans
};

export const getTranslation = (language, key) => {
    const selectedTranslation = translations[language] || translations.ar;
    return selectedTranslation[key] || key;
};