'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', icon: 'home', href: '/home' },
    { name: 'Search', icon: 'search', href: '/search' },
    { name: 'Explore', icon: 'explore', href: '/explore' },
    { name: 'Messages', icon: 'chat', href: '/messages' },
    { name: 'Notification', icon: 'notifications', href: '/notifications' },
    { name: 'Create', icon: 'add_circle', href: '/create' },
  ];

  return (
    <aside className="w-[245px] bg-white shadow-lg flex flex-col items-center min-h-screen">
      {/* Логотип */}
      <div className="mb-6 mt-6">
        <Image src="/logo.png" alt="ICHGRAM Logo" width={110} height={64} />
      </div>

      {/* Меню */}
      <ul className="space-y-2 px-4 flex-grow w-full">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center space-x-4 py-2 px-4 rounded-lg w-full ${
                pathname === item.href
                  ? 'bg-gray-200 text-black font-semibold'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}
            >
              <span className="material-icons text-[24px]">{item.icon}</span>
              <span className="text-[16px] font-medium">{item.name}</span>
            </Link>
          </li>
        ))}

        {/* Профиль */}
        <li className="mt-auto w-full">
          <div className="flex items-center space-x-4 px-4 py-4 rounded-lg font-semibold">
            <Image
              src="/icons/profile-icon.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Link
              href="/profile"
              className="text-gray-600 hover:text-black text-[16px] font-medium"
            >
              Profile
            </Link>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
