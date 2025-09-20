"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExplorePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations
  const heroScale = 1 + scrollY * 0.003;
  const heroOpacity = Math.max(0, 1 - scrollY * 0.003);
  const gearScale = 0.1 + scrollY * 0.002;
  const gearRotation = scrollY * 0.5;
  const textOpacity = scrollY > 300 ? Math.min(1, (scrollY - 300) * 0.01) : 0;

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-black">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="text-center transform transition-all duration-100 ease-out"
          style={{
            transform: `scale(${heroScale})`,
            opacity: heroOpacity,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono">
            PRECISION
          </h1>
          <p className="text-xl text-white/60">
            Scroll to explore our technology
          </p>
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-8 left-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          ← Back
        </Link>
      </section>

      {/* Parallax Gear Section */}
      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Main Gear - Apple style scaling */}
          <div
            className="transform transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${Math.min(
                gearScale,
                5
              )}) rotate(${gearRotation}deg)`,
              opacity: gearScale > 0.5 ? 1 : gearScale * 2,
            }}
          >
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              {/* Outer ring */}
              <circle
                cx="200"
                cy="200"
                r="180"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="200"
                cy="200"
                r="160"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />

              {/* Center circle */}
              <circle
                cx="200"
                cy="200"
                r="40"
                fill="white"
                fillOpacity="0.1"
                stroke="white"
                strokeWidth="2"
              />

              {/* Gear teeth */}
              {[...Array(16)].map((_, i) => {
                const angle = i * 22.5 * (Math.PI / 180);
                const x1 = 200 + Math.cos(angle) * 140;
                const y1 = 200 + Math.sin(angle) * 140;
                const x2 = 200 + Math.cos(angle) * 180;
                const y2 = 200 + Math.sin(angle) * 180;

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeWidth="3"
                  />
                );
              })}

              {/* Inner spokes */}
              {[...Array(8)].map((_, i) => {
                const angle = i * 45 * (Math.PI / 180);
                const x1 = 200 + Math.cos(angle) * 40;
                const y1 = 200 + Math.sin(angle) * 40;
                const x2 = 200 + Math.cos(angle) * 120;
                const y2 = 200 + Math.sin(angle) * 120;

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
          </div>

          {/* Text overlays that appear on scroll */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: textOpacity }}
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                ENGINEERING
              </h2>
              <p className="text-xl text-white/80">
                Perfection in every detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="relative h-screen bg-gradient-to-b from-black to-gray-900">
        <div
          className="flex items-center justify-center h-full transform transition-all duration-300"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: scrollY > 800 ? 1 : 0,
          }}
        >
          <div className="text-center max-w-4xl px-6">
            <h2 className="text-5xl font-bold mb-8 font-mono">
              SPECIFICATIONS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  99.99%
                </div>
                <div className="text-white/80">Precision Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  ±0.001
                </div>
                <div className="text-white/80">Tolerance (mm)</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  24/7
                </div>
                <div className="text-white/80">Operation Time</div>
              </div>
            </div>

            <p className="text-lg text-white/70 leading-relaxed">
              Our mechanical engineering solutions combine traditional precision
              with cutting-edge technology to deliver unparalleled performance
              in every application.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              READY TO BUILD?
            </h2>

            <p className="text-xl text-white/70 mb-8">
              {"Let's engineer the future together"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                View Products
              </Link>
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-600 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
