
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium"
    >
      {i18n.language === 'ru' ? 'EN' : 'RU'}
    </Button>
  );
};
