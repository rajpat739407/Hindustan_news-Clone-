'use client';

import Link from 'next/link';
import NewsImage from './NewsImage';

export default function HeroSection({ featuredNews }) {
  if (!featuredNews || featuredNews.length === 0) return null;

  const mainNews = featuredNews[0];
  const sideNews = featuredNews.slice(1, 3);

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-600 pl-3">
          मुख्य समाचार
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Featured News */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-80">
                <NewsImage 
                  src={mainNews.image} 
                  alt={mainNews.title}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <span className="text-white bg-red-600 px-3 py-1 rounded text-sm mb-2 inline-block">
                    {mainNews.source}
                  </span>
                  <Link href={`/news/${mainNews.id}`}>
                    <h3 className="text-2xl font-bold text-white mb-2 hover:text-gray-200 cursor-pointer">
                      {mainNews.title}
                    </h3>
                  </Link>
                  <p className="text-gray-200 line-clamp-2">
                    {mainNews.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Featured News */}
          <div className="space-y-4">
            {sideNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <NewsImage 
                      src={news.image} 
                      alt={news.title}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-3 flex-1">
                    <Link href={`/news/${news.id}`}>
                      <h4 className="font-semibold text-sm mb-1 hover:text-red-600 cursor-pointer line-clamp-2">
                        {news.title}
                      </h4>
                    </Link>
                    <p className="text-gray-500 text-xs line-clamp-2">
                      {news.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}