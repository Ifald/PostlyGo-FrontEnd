import React from 'react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-center text-2xl font-semibold">
          Welcome to Ichgram!
        </h1>
        {/* Другие компоненты */}
      </main>
    </div>
  );
}
