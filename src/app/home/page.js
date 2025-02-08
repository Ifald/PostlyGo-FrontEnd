// src/app/home/page.js
import Post from '@/components/Post';

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="flex flex-wrap gap-6">
        {/* Карточки постов */}
        <div className="w-full md:w-2/5">
          <Post />
        </div>
        <div className="w-full md:w-2/5">
          <Post />
        </div>
        <div className="w-full md:w-2/5">
          <Post />
        </div>
        <div className="w-full md:w-2/5">
          <Post />
        </div>
      </div>
    </main>
  );
}
