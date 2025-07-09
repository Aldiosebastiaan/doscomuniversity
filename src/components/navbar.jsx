// Navbar.jsx
import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import NavbarBg from '../assets/bg-navbar.png';
import { href } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Program', href: '/program' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav
      className="shadow-lg bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${NavbarBg})` }} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-16 w-16 rounded-full object-cover border-2 border-violet-300"
              />
              <span className="ml-3 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-300">
                Doscom University
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-800 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-gray-300 hover:text-white text-lg font-medium px-3 py-2 rounded-md"
            >
              Masuk
            </a>
            <a
              href="/daftar"
              className="bg-gradient-to-r from-indigo-400 to-violet-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition hover:from-blue-600 hover:to-purple-700"
            >
              Daftar Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-4 pb-6 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-3 pt-4 border-t border-gray-700">
            <a
              href="/login"
              className="text-gray-300 hover:text-white text-base font-medium"
            >
              Masuk
            </a>
            <a
              href="/daftar"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
