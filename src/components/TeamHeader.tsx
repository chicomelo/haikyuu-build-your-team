import { encodeTeamToQuery } from "../services/share";
import { useStore } from "../state/store";
import { TeamManager } from "./TeamManager";
import logo from "../assets/logo.png";
import { Send, Globe, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { shortenUrl } from "../services/urlShortener";
import { MobileMenu } from "./MobileMenu";

export function TeamHeader() {
  const team = useStore((s) => s.team);
  const rotationLabels = useStore((s) => s.rotationLabels);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("PT-BR");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Carregar idioma do localStorage ao iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (
      savedLanguage &&
      (savedLanguage === "PT-BR" || savedLanguage === "EN")
    ) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage === "PT-BR" ? "pt-BR" : "en");
    }
  }, [i18n]);

  const share = async () => {
    const url = encodeTeamToQuery(team, rotationLabels);

    try {
      // Encurtar a URL usando TinyURL
      const shortenedUrl = await shortenUrl(url);

      // Copiar a URL encurtada para a área de transferência
      await navigator.clipboard.writeText(shortenedUrl);
      alert(t("team_manager.link_copied"));
    } catch {
      // Fallback: mostrar o prompt com a URL original se o encurtamento falhar
      prompt(t("team_manager.copy_link"), url);
    }
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
    // Salvar idioma no localStorage
    localStorage.setItem("selectedLanguage", lang);
    // Mudar idioma no i18next (para refletir imediatamente)
    i18n.changeLanguage(lang === "PT-BR" ? "pt-BR" : "en");

    // Navegar para a rota do idioma, preservando query/hash
    const { pathname, search, hash } = window.location;
    const isEN = pathname.startsWith("/en");
    if (lang === "EN") {
      const targetPath = isEN ? pathname : "/en" + pathname;
      window.location.href = targetPath + search + hash;
    } else {
      // PT-BR: remover prefixo /en se existir
      const targetPath = isEN
        ? pathname.replace(/^\/en/, "") || "/"
        : pathname || "/";
      window.location.href = targetPath + search + hash;
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto max-w-[1600px] px-4 h-16 md:h-14 flex items-center gap-3">
        <h1 className="font-semibold flex items-center gap-2">
          <img src={logo} alt="Haikyu Fly High" className="h-6 inline" />
          <span className="hidden md:inline">
            Haikyu Fly High — Team Builder
          </span>
          <span className="md:hidden">
            Haikyu Fly High <br />
            Team Builder
          </span>
        </h1>
        <div className="ml-auto flex items-center gap-2">
          {/* Idioma sempre visível aqui por enquanto */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="btn flex items-center gap-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-1 left-0 bg-neutral-800 border border-white/10 rounded-md shadow-lg z-20 w-32">
                <button
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-neutral-700 ${
                    language === "PT-BR" ? "bg-neutral-700" : ""
                  }`}
                  onClick={() => handleLanguageChange("PT-BR")}
                >
                  PT-BR
                </button>
                <button
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-neutral-700 ${
                    language === "EN" ? "bg-neutral-700" : ""
                  }`}
                  onClick={() => handleLanguageChange("EN")}
                >
                  EN
                </button>
              </div>
            )}
          </div>

          {/* Botões desktop */}
          <TeamManager />
          <button
            className="btn hidden md:inline-flex"
            onClick={share}
            title={t("buttons.share")!}
          >
            <Send size={16} />
          </button>

          {/* Menu hambúrguer apenas no mobile */}
          <button
            className="btn md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={16} />
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onShare={share}
      />
    </header>
  );
}
