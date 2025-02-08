import Image from 'next/image';

const Post = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden ml-5 mb-6">
      {/* Автор */}
      <div className="flex items-center p-4">
        <div className="relative w-10 h-10">
          {/* Градиентная рамка */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 p-[2px]">
            <Image
              src="/images/avatar.png"
              alt="Author"
              className="rounded-full object-cover"
              layout="fill"
            />
          </div>
        </div>
        <div className="ml-3 flex-1">
          <p className="font-bold text-sm">sasha</p>
          <p className="text-gray-500 text-xs">• 2 week</p>
        </div>
        {/* Дата */}
        <button className="text-blue-500 text-xs font-medium hover:underline">
          follow
        </button>
      </div>

      {/* Изображение */}
      <div className="w-full">
        <Image
          src="/images/post-image.jpg"
          alt="Post content"
          className="w-full h-auto object-cover"
          width={720}
          height={480}
        />
      </div>

      {/* Действия и подпись */}
      <div className="p-4">
        {/* Действия */}
        <div className="flex items-center space-x-3 mb-3">
          <button className="text-gray-500 hover:text-black">❤️</button>
          <button className="text-gray-500 hover:text-black">💬</button>
        </div>
        {/* Количество лайков */}
        <p className="text-sm font-bold mb-1">101 824 likes</p>
        {/* Подпись */}
        <p className="text-sm mb-2">
          <strong>sasha</strong>{' '}
          <span className="italic">It’s golden, Ponyboy!</span>
        </p>
        {/* Комментарии */}
        <p className="text-sm mb-2">
          heyyyy | M... <span className="text-gray-500">more</span>
        </p>
        <p className="text-sm text-gray-500 cursor-pointer">
          View all comments (732)
        </p>
      </div>
    </div>
  );
};

export default Post;
