"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-8 py-4">
          <Link
            href="/explore"
            className="text-white/60 hover:text-white transition-colors"
          >
            ← Back to Explore
          </Link>
          <h1 className="text-xl font-bold">PRODUCTS</h1>
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">PRECISION</h1>
          <h2 className="text-2xl md:text-4xl font-light text-white/70 mb-8">
            Engineering Excellence
          </h2>
          <p className="text-lg text-white/60">
            Scroll to discover our products
          </p>
        </div>
      </section>

      {/* Product 1 - Engine 1 */}
      <section className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

          {/* Product Image Container */}
          <div
            className="relative transform transition-all duration-100 ease-out"
            style={{
              transform: `scale(${Math.min(
                0.5 + (scrollY - 800) * 0.001,
                2
              )}) translateY(${(scrollY - 800) * -0.2}px)`,
              opacity: scrollY > 600 ? Math.min(1, (scrollY - 600) * 0.003) : 0,
            }}
          >
            {/* Engine 1 Image */}
            <Image
              src="/assets/robot1.png"
              alt="Precision Engine"
              width={600}
              height={400}
              className="w-auto h-auto max-w-[600px] max-h-[400px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Product Info */}
          <div
            className="absolute left-16 top-1/2 transform -translate-y-1/2 max-w-md"
            style={{
              opacity:
                scrollY > 1200 ? Math.min(1, (scrollY - 1200) * 0.005) : 0,
              transform: `translateX(${
                scrollY > 1200 ? 0 : -100
              }px) translateY(-50%)`,
            }}
          >
            <h3 className="text-4xl font-bold mb-4">Precision Engine</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Advanced mechanical engineering solutions delivering exceptional
              performance and reliability in demanding applications.
            </p>
            <div className="mt-6">
              <div className="text-sm text-blue-400 font-mono">
                ACCURACY: ±0.001mm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2 - Industrial Robot */}
      <section className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>

          <div
            className="relative transform transition-all duration-100 ease-out"
            style={{
              transform: `scale(${Math.min(
                0.3 + (scrollY - 2400) * 0.0008,
                1.8
              )}) rotateY(${(scrollY - 2400) * 0.1}deg)`,
              opacity:
                scrollY > 2200 ? Math.min(1, (scrollY - 2200) * 0.003) : 0,
            }}
          >
            {/* Industrial Robot Image */}
            <Image
              src="/assets/engine2.png"
              alt="Industrial Robot"
              width={500}
              height={600}
              className="w-auto h-auto max-w-[500px] max-h-[600px] object-contain drop-shadow-2xl"
            />
          </div>

          <div
            className="absolute right-16 top-1/2 transform -translate-y-1/2 max-w-md text-right"
            style={{
              opacity:
                scrollY > 2800 ? Math.min(1, (scrollY - 2800) * 0.005) : 0,
              transform: `translateX(${
                scrollY > 2800 ? 0 : 100
              }px) translateY(-50%)`,
            }}
          >
            <h3 className="text-4xl font-bold mb-4">Automation Pro</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Advanced robotic systems designed for precision manufacturing and
              automated production lines.
            </p>
            <div className="mt-6">
              <div className="text-sm text-cyan-400 font-mono">
                SPEED: 2000mm/s
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 3 - Engine 2 */}
      <section className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

          <div
            className="relative transform transition-all duration-100 ease-out"
            style={{
              transform: `scale(${Math.min(
                0.2 + (scrollY - 4000) * 0.0015,
                2.5
              )}) rotate(${(scrollY - 4000) * 0.05}deg) translateX(${
                (scrollY - 4000) * 0.1
              }px)`,
              opacity:
                scrollY > 3800 ? Math.min(1, (scrollY - 3800) * 0.003) : 0,
            }}
          >
            {/* Advanced Engine Image */}
            <Image
              src="/assets/engine1.png"
              alt="Advanced Engine"
              width={400}
              height={300}
              className="w-auto h-auto max-w-[400px] max-h-[300px] object-contain drop-shadow-2xl"
            />
          </div>

          <div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 max-w-2xl text-center"
            style={{
              opacity:
                scrollY > 4400 ? Math.min(1, (scrollY - 4400) * 0.005) : 0,
              transform: `translateY(${
                scrollY > 4400 ? 0 : 80
              }px) translateX(-50%) scale(${scrollY > 4400 ? 1 : 0.8})`,
            }}
          >
            <h3 className="text-4xl font-bold mb-4">Advanced Engine</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              High-performance engine technology engineered for maximum
              efficiency and precision manufacturing.
            </p>
            <div className="mt-6">
              <div className="text-sm text-purple-400 font-mono">
                RESOLUTION: 0.0001mm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative h-screen bg-gradient-to-b from-black to-gray-900">
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-6">
            <h2 className="text-5xl font-bold mb-8">Engineering Tomorrow</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Experience the future of precision engineering with our
              cutting-edge solutions designed for perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Back to Explore
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
