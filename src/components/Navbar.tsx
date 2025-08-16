import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Pregnancy Tracker', path: '/pregnancy-tracker' },
  { name: 'Myths & Facts', path: '#myths' },
  { name: 'Resources', path: '#resources' },
  { name: 'Emergency', path: '#emergency', active: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 w-full p-2">
      <div className="flex max-w-5xl mx-auto items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <ul className="gap-7 text-sm hidden md:flex">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`hover:text-rose-600 capitalize p-2 ${
                link.active
                  ? 'bg-white text-black rounded-2xl hover:text-white hover:bg-red-400'
                  : ''
              }`}
            >
              {link.path.startsWith('#') ? (
                <a href={link.path}>{link.name}</a>
              ) : (
                <Link to={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <div className="flex flex-col justify-center items-center w-6 h-6">
            <span className="block h-0.5 w-6 bg-current rounded-full" />
            <span className="block h-0.5 w-6 bg-current rounded-full mt-1.5" />
            <span className="block h-0.5 w-6 bg-current rounded-full mt-1.5" />
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 relative">
          
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:bg-pink-100 rounded-lg"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="mt-12 space-y-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.path.startsWith('#') ? (
                  <a
                    href={link.path}
                    className={`block px-4 py-3 rounded-xl font-medium capitalize transition-colors ${
                      link.active
                        ? 'bg-white text-black hover:bg-red-400 hover:text-white'
                        : 'text-gray-700 hover:text-rose-600 hover:bg-pink-100'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-medium capitalize transition-colors ${
                      link.active
                        ? 'bg-white text-black hover:bg-red-400 hover:text-white'
                        : 'text-gray-700 hover:text-rose-600 hover:bg-pink-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
