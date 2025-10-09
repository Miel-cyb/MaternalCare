import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';

type ProfileIconProps = {
  direction?: 'up' | 'down';
}

export default function ProfileIcon({ direction = 'down' }: ProfileIconProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate('/login'))
      .catch((error) => console.error('Logout Error:', error));
  };

  if (!user) {
    return null; 
  }

  const userInitial = user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : '?');

  const dialogPositionClass = direction === 'up' ? 'bottom-full mb-2' : 'mt-2';

    return (
      <div className="relative">
        <button
          onClick={() => setIsDialogOpen(!isDialogOpen)}
          className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold"
        >
          {userInitial}
        </button>
        {isDialogOpen && (
          <div className={`absolute right-0 w-48 bg-white rounded-md shadow-lg py-1 z-[9999] ${dialogPositionClass}`}>
            <Link
              to="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsDialogOpen(false)}
            >
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }
