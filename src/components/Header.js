import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Логотип */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={97} height={54.56} />
        </Link>
      </div>

      {/* Навигация */}
      <nav className="flex items-center space-x-6">
        <Link
          href="/search"
          className="text-gray-700 hover:text-black font-medium"
        >
          Search
        </Link>
        <Link
          href="/explore"
          className="text-gray-700 hover:text-black font-medium"
        >
          Explore
        </Link>
        <Link
          href="/messages"
          className="text-gray-700 hover:text-black font-medium"
        >
          Messages
        </Link>
        <Link
          href="/notifications"
          className="text-gray-700 hover:text-black font-medium"
        >
          Notifications
        </Link>
        <Link
          href="/profile"
          className="text-gray-700 hover:text-black font-medium"
        >
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
