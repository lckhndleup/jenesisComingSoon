"use client";

import { useState, useEffect } from "react";
import TRFlag from "./TRFlag";
import ENFlag from "./ENFlag";

// Particle type tanımlaması
interface Particle {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

// Dil metinleri
const translations = {
  tr: {
    brandName: "JENESIS",
    subTitle: "BUHAR JENERATÖRLERİ",
    description:
      "1984'den bugüne sürekli gelişen şirketimizin web sayfasını sizler için yeniliyoruz",
    status: "Yakında Hizmetinizdeyiz",
    urgentCalls: "acil telepleriniz için",
  },
  en: {
    brandName: "JENESIS",
    subTitle: "STEAM GENERATORS",
    description:
      "We're updating our company's website for you, as we've been continuously evolving since 1984.",
    status: "Coming Soon",
    urgentCalls: "for your urgent calls",
  },
};

type Language = "tr" | "en";

export default function ComingSoon() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState<Language>("tr"); // Default Türkçe
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Font yükleme kontrolü
    const checkFontLoaded = () => {
      document.fonts.ready.then(() => {
        setFontLoaded(true);
      });
    };
    checkFontLoaded();

    // Cihaz tipini kontrol et
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mobilde daha az particle oluştur
    const particleCount =
      window.innerWidth < 768 ? 15 : window.innerWidth < 1024 ? 20 : 25;

    const newParticles = [...Array(particleCount)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 2 + Math.random() * 3,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#27282A", minHeight: "100dvh" }}
    >
      {/* Font preload link */}
      <link
        rel="preload"
        href="https://db.onlinewebfonts.com/c/29d7ec48c3b7b1104c253419abdd6d39?family=Space+Colony+W03+SemiBold"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://db.onlinewebfonts.com/c/29d7ec48c3b7b1104c253419abdd6d39?family=Space+Colony+W03+SemiBold"
      />

      {/* Language Selector - Sağ Üst */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50 flex items-center gap-2 sm:gap-3">
        <div
          className={`transition-all duration-200 ${
            language === "tr"
              ? "opacity-100 scale-110 ring-2 ring-[#BC461B]/50 rounded"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          <TRFlag
            onClick={() => handleLanguageChange("tr")}
            className="drop-shadow-lg"
          />
        </div>
        <div className="w-px h-4 bg-[#BC461B]/30"></div>
        <div
          className={`transition-all duration-200 ${
            language === "en"
              ? "opacity-100 scale-110 ring-2 ring-[#BC461B]/50 rounded"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          <ENFlag
            onClick={() => handleLanguageChange("en")}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Floating particles */}
      {isClient && (
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Mechanical Grid Pattern */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
              className="sm:w-12 sm:h-12"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
                className="sm:stroke-[0.5]"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Rotating Gears - JENESIS rengiyle, tam net */}
      <div className="absolute top-16 right-4 sm:top-20 sm:right-8 lg:top-24 lg:right-20 opacity-100">
        <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" stroke="#BC461B" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" stroke="#BC461B" strokeWidth="1" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="10"
                x2="50"
                y2="20"
                stroke="#BC461B"
                strokeWidth="2"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="absolute bottom-10 left-4 sm:bottom-16 sm:left-8 lg:bottom-20 lg:left-20 opacity-100">
        <div className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 animate-spin-reverse">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="35" stroke="#BC461B" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" stroke="#BC461B" strokeWidth="1" />
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="15"
                x2="50"
                y2="25"
                stroke="#BC461B"
                strokeWidth="2"
                transform={`rotate(${i * 60} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-4 pb-20 sm:pb-24 md:pb-20 text-center transition-opacity duration-300 ${
          fontLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Brand Name */}
        <div className="animate-fade-in mb-2 sm:mb-3">
          <h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-mono tracking-wider leading-none"
            style={{
              color: "#BC461B",
              fontFamily: "'Space Colony W03 SemiBold', monospace",
            }}
          >
            {t.brandName}
          </h1>

          {/* Alt Başlık - BUHAR JENERATÖRLERİ - Küçültülmüş */}
          <h2
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-3xl font-bold font-mono tracking-widest mt-2 sm:mt-3"
            style={{
              color: "#4D4B4C",
              fontFamily: "'Space Colony W03 SemiBold', monospace",
            }}
          >
            {t.subTitle}
          </h2>

          <div className="w-16 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#BC461B] to-transparent mx-auto mt-3 sm:mt-5"></div>
        </div>

        {/* Company Description */}
        <div className="animate-fade-in-delayed-2 mb-8 sm:mb-12 max-w-xs sm:max-w-lg lg:max-w-2xl px-2">
          <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center">
            <p
              className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed font-light text-center"
              style={{ fontFamily: "'Space Colony W03 SemiBold', monospace" }}
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* Progress Bar - Yeni tasarım */}
        <div className="animate-fade-in-delayed-3 w-full max-w-xs sm:max-w-sm lg:max-w-md mb-6 sm:mb-8 px-4 sm:px-0">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            {/* <span>İlerleme</span> */}
            {/* <span>75%</span> */}
          </div>
          <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BC461B] to-transparent animate-progress-load"></div>
          </div>
        </div>

        {/* Status Text */}
        <div className="animate-opacity-sync mb-16 sm:mb-20">
          <p
            className="text-gray-500 text-xs sm:text-sm font-mono tracking-widest"
            style={{ fontFamily: "'Space Colony W03 SemiBold', monospace" }}
          >
            {t.status}
          </p>
        </div>
      </div>

      {/* Footer - Contact Information */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pb-4 sm:pb-6 lg:pb-8"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center">
            {/* Email - Sol */}
            <div className="text-center md:text-left order-2 md:order-1">
              <a
                href="mailto:info@jenesis.com.tr"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-[#BC461B] transition-colors duration-300"
                style={{ fontFamily: "'Space Colony W03 SemiBold', monospace" }}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                info@jenesis.com.tr
              </a>
            </div>

            {/* Acil Çağrılar - Merkez */}
            <div className="text-center order-1 md:order-2">
              <p
                className="text-xs sm:text-sm text-[#BC461B] font-bold tracking-wider"
                style={{ fontFamily: "'Space Colony W03 SemiBold', monospace" }}
              >
                {t.urgentCalls}
              </p>
            </div>

            {/* Telefon - Sağ */}
            <div className="text-center md:text-right order-3 md:order-3">
              <a
                href="tel:+902125951656"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-[#BC461B] transition-colors duration-300"
                style={{ fontFamily: "'Space Colony W03 SemiBold', monospace" }}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                +90 212 595 16 56
              </a>
            </div>
          </div>

          {/* Alt çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#BC461B]/30 to-transparent mt-4"></div>
        </div>
      </div>

      <style jsx>{`
        /* Font face tanımı en başta */
        @font-face {
          font-family: "Space Colony W03 SemiBold";
          src: url("https://db.onlinewebfonts.com/t/29d7ec48c3b7b1104c253419abdd6d39.woff2")
              format("woff2"),
            url("https://db.onlinewebfonts.com/t/29d7ec48c3b7b1104c253419abdd6d39.woff")
              format("woff");
          font-display: block;
          font-weight: 600;
          font-style: normal;
        }

        /* Viewport height fix for mobile */
        html {
          height: 100%;
          height: 100dvh;
        }

        body {
          height: 100%;
          height: 100dvh;
        }

        /* Mobile First Animations */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress-load {
          from {
            width: 0%;
          }
          to {
            width: 75%;
          }
        }

        @keyframes opacity-sync {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in 1s ease-out 0.5s both;
        }

        .animate-fade-in-delayed-3 {
          animation: fade-in 1s ease-out 1s both;
        }

        .animate-progress-load {
          animation: progress-load 3s ease-in-out infinite;
        }

        .animate-opacity-sync {
          animation: opacity-sync 2s ease-in-out infinite alternate;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin 6s linear infinite reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive breakpoints */
        @media (max-width: 639px) {
          .xs\:text-5xl {
            font-size: 3rem;
            line-height: 1;
          }
        }
      `}</style>
    </div>
  );
}
