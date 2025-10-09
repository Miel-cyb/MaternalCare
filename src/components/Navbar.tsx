import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import ProfileIcon from './ProfileIcon';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Pregnancy Tracker', path: '/pregnancy-tracker' },
  { name: 'Nutritional Guide', path: '/nutritional-guide' },
  { name: 'Myths & Facts', path: '#myths' },
  { name: 'Resources', path: '#resources' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-rose-50 shadow-lg drop-shadow-2xl sticky top-0 left-0 right-0 z-30">
      <div className="flex max-w-6xl mx-auto items-center justify-between p-4">
        <Logo />

        {/* Desktop Menu */}
        <ul className="gap-8 text-base hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >
              {link.path.startsWith('#') ? (
                <a href={link.path}>{link.name}</a>
              ) : (
                <Link to={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
          {user && (
            <li><ProfileIcon direction="down" /></li>
          )}
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <div className="flex flex-col justify-center items-center w-6 h-6">
            <span className="block h-0.5 w-6 bg-gray-800 rounded-full" />
            <span className="block h-0.5 w-6 bg-gray-800 rounded-full mt-1.5" />
            <span className="block h-0.5 w-6 bg-gray-800 rounded-full mt-1.5" />
          </div>
        </button>
      </div>

      {/* Sidebar Overlay*/}
      <div
        className={`fixed md:hidden inset-0 z-40 bg-black/75 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      {/* Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-full max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 relative h-full flex flex-col">
          
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="mt-16 space-y-6 flex-grow">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.path.startsWith('#') ? (
                  <a
                    href={link.path}
                    className="block px-4 py-3 rounded-lg font-medium text-lg text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-4 py-3 rounded-lg font-medium text-lg text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Login/Signup or Profile Icon */}
          {user && (
            <div className="border-t pt-6 mt-6 space-y-4">
                <ProfileIcon direction="up" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}