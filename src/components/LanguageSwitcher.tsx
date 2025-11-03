import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-5 right-5 z-30">
      <button onClick={() => changeLanguage('en')} className="px-3 py-1 mr-2 bg-pink-700 text-white font-semibold rounded-md">
        EN
      </button>
      <button onClick={() => changeLanguage('twi')} className="px-3 py-1 bg-pink-700 text-white font-semibold rounded-md">
        TWI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
