'use client';

import Link from 'next/link';
import NewsImage from './NewsImage';

export default function NewsCard({ news }) {
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('hi-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return 'तारीख उपलब्ध नहीं';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <NewsImage 
          src={news.image} 
          alt={news.title}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-red-600 font-semibold">{news.source}</span>
          <span className="text-xs text-gray-500">{formatDate(news.pubDate)}</span>
        </div>
        
        <Link href={`/news/${news.id}`} className="flex-1">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-red-600 cursor-pointer min-h-[56px]">
            {news.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-3 flex-1">
          {news.description}
        </p>
        
        <Link href={`/news/${news.id}`} className="mt-3 inline-block">
          <button className="text-red-600 hover:text-red-700 font-medium text-sm">
            पूरा पढ़ें →
          </button>
        </Link>
      </div>
    </div>
  );
}