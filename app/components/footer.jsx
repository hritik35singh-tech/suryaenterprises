// components/Footer.jsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: "About Us", href: "/aboutUs" },
    { name: "Management", href: "/management" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "Insecticides", href: "/products/insecticides" },
    { name: "Herbicides", href: "/products/herbicides" },
    { name: "Fungicides", href: "/products/fungicides" },
    { name: "PGR", href: "/products/pgr" },
    { name: "Institutional", href: "/products/institutional" },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      name: "Facebook",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      name: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      name: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      name: "Instagram",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* =====================================================
          TOP GREEN BORDER
      ====================================================== */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500" />

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full -ml-40 -mb-40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* =====================================================
            MAIN FOOTER - Balanced 16-col grid to fix overlaps
        ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-16 gap-10 xl:gap-6">

          {/* =====================================================
              COMPANY (Increased to col-span-4 to fix text overlap)
          ====================================================== */}
          <div className="md:col-span-2 xl:col-span-4 min-w-0">
            <Link
              href="/"
              className="inline-flex items-center gap-2 lg:gap-3 group"
              aria-label="Surya Enterprises home"
            >
              <Image
                src="/assets/images/logo.jpeg"
                alt="Surya Enterprises"
                width={220}
                height={64}
                className="h-12 lg:h-14 w-auto object-contain flex-shrink-0"
              />
              <span className="text-lg lg:text-xl font-bold tracking-tight text-green-400 whitespace-nowrap">
                SURYA<span className="text-amber-300">ENTERPRISES</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Discover the Difference with SURYAENTERPRISES Limited.
              We're redefining agrochemical excellence with quality,
              innovation, and sustainable practices as your trusted
              partner in cultivating success.
            </p>

            {/* Contact Information */}
            <div className="mt-5 space-y-3">
              <a
                href="tel:9876543210"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex-shrink-0">
                  <Phone className="w-4 h-4 text-green-500" />
                </span>
                <span className="whitespace-nowrap">
                  9876543210
                </span>
              </a>

              <a
                href="mailto:info@SURYAENTERPRISES.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex-shrink-0">
                  <Mail className="w-4 h-4 text-green-500" />
                </span>
                <span className="whitespace-nowrap text-xs lg:text-sm">
                  info@SURYAENTERPRISES.com
                </span>
              </a>
            </div>
          </div>

          {/* =====================================================
              USEFUL LINKS (col-span-2)
          ====================================================== */}
          <div className="xl:col-span-2">
            <h3 className="whitespace-nowrap text-base font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full flex-shrink-0" />
              USEFUL LINKS
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-green-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span className="whitespace-nowrap">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              PRODUCTS (col-span-2)
          ====================================================== */}
          <div className="xl:col-span-2">
            <h3 className="whitespace-nowrap text-base font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full flex-shrink-0" />
              OUR PRODUCTS
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-green-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span className="whitespace-nowrap">
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              OUR LOCATIONS (Adjusted to col-span-5)
          ====================================================== */}
          <div className="md:col-span-2 xl:col-span-5 min-w-0">
            <h3 className="whitespace-nowrap text-base font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full flex-shrink-0" />
              OUR LOCATIONS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-4 xl:gap-6">
              {/* Registered Official Address */}
              <a
                href="https://maps.google.com/?q=Nabi+Karim+New+Delhi+Delhi+110055"
                target="_blank"
                rel="noopener noreferrer"
                className="group block min-w-0"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 mt-0.5">
                    <MapPin className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-green-400 transition-colors">
                      Registered Official Address
                    </h4>
                    <div className="mt-2 flex flex-col gap-0.5 text-xs leading-5 text-gray-500">
                      <span>Ground Floor, 6670,</span>
                      <span>BALMIKI MANDIR,</span>
                      <span>Nabi Karim Road, Nabi Karim,</span>
                      <span>New Delhi, Central Delhi,</span>
                      <span>Delhi - 110055</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Business Address */}
              <a
                href="https://maps.google.com/?q=Rajdhani+Krishi+Mandi+Sikar+Road+Jaipur+302013"
                target="_blank"
                rel="noopener noreferrer"
                className="group block min-w-0"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 mt-0.5">
                    <MapPin className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-green-400 transition-colors">
                      Business Address
                    </h4>
                    <div className="mt-2 flex flex-col gap-0.5 text-xs leading-5 text-gray-500">
                      <span>Shop No. SS-53,</span>
                      <span>Rajdhani Krishi Mandi,</span>
                      <span>Sikar Road, Kukar Kheda,</span>
                      <span>Jaipur, Rajasthan,</span>
                      <span>PIN Code - 302013</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* =====================================================
              STAY CONNECTED (col-span-3)
          ====================================================== */}
          <div className="md:col-span-2 xl:col-span-3 min-w-0">
            <h3 className="whitespace-nowrap text-base font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full flex-shrink-0" />
              STAY CONNECTED
            </h3>

            {/* Newsletter */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-sm leading-5 text-gray-300 mb-3">
                Subscribe to our newsletter for updates and offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 px-3 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5">
              <h4 className="text-sm font-medium text-gray-300 mb-3">
                Follow Us
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-green-600 text-gray-400 hover:text-white rounded-lg transition-all border border-gray-700 hover:border-green-500 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="mt-12 pt-7 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © {currentYear} SURYAENTERPRISES Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="hover:text-green-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
