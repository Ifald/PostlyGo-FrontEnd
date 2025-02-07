/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Включение строгого режима React
  async headers() {
    return [
      {
        source: "/(.*)", // Применяется ко всем маршрутам
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate", // Отключение кеширования
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
