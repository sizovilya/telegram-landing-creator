
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

  // Map language codes to display names and flag icons
  const languageOptions: Record<string, { name: string; flag: string }> = {
    en: { name: "English", flag: "EN" },
    ru: { name: "Русский", flag: "RU" },
    sv: { name: "Svenska", flag: "SE" },
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
          <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold bg-slate-100 text-slate-700 rounded">
            {currentLanguage.flag}
          </span>
          {currentLanguage.name}
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
            <span className={`inline-flex items-center justify-center w-6 h-6 text-xs font-semibold ${
              i18n.language === code ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-700"
            } rounded mr-2`}>
              {flag}
            </span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
