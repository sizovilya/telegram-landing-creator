
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Map language codes to display names and flag emojis
  const languageOptions: Record<string, { name: string; flag: string }> = {
    en: { name: "English", flag: "🇬🇧" },
    ru: { name: "Русский", flag: "🇷🇺" },
    sv: { name: "Svenska", flag: "🇸🇪" },
  };

  // Get current language display name and flag
  const currentLanguage = languageOptions[i18n.language] || languageOptions.en;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="font-medium flex items-center gap-1"
        >
          {currentLanguage.flag} {currentLanguage.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-slate-200">
        {Object.entries(languageOptions).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className={`${
              i18n.language === code ? "font-semibold text-primary" : "text-slate-700"
            } cursor-pointer`}
          >
            {flag} {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
