const Footer = () => {
  const footerLinks = [
    'Home',
    'Search',
    'Explore',
    'Messages',
    'Notifications',
    'Create',
  ];

  return (
    <footer className="w-full bg-white p-4 border-t mt-auto">
      {/* Контейнер ссылок */}
      <div className="flex justify-center space-x-4">
        {footerLinks.map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="text-gray-600 hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
      {/* Текст копирайта */}
      <p className="text-center text-sm text-gray-400 mt-4">© 2024 ICHGRAM</p>
    </footer>
  );
};

export default Footer;
