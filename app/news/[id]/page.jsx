import { fetchTopHeadlines } from '../../utils/newsParser';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NewsImage from '../../components/NewsImage';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = await fetchTopHeadlines();
  const newsItem = news.find(item => item.id === id);

  if (!newsItem) {
    return {
      title: 'समाचार नहीं मिला - हिंदुस्तान न्यूज़',
    };
  }

  return {
    title: `${newsItem.title} - हिंदुस्तान न्यूज़`,
    description: newsItem.description,
    openGraph: {
      title: newsItem.title,
      description: newsItem.description,
      images: [newsItem.image],
    },
  };
}

export default async function NewsDetail({ params }) {
  const { id } = await params;
  const news = await fetchTopHeadlines();
  const newsItem = news.find(item => item.id === id);

  if (!newsItem) {
    notFound();
  }

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('hi-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'तारीख उपलब्ध नहीं';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-red-600 hover:text-red-700">
            मुख्य पृष्ठ
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">समाचार</span>
        </nav>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-96 w-full">
            <NewsImage 
              src={newsItem.image} 
              alt={newsItem.title}
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                {newsItem.source}
              </span>
              <span className="text-gray-500 text-sm">
                {formatDate(newsItem.pubDate)}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {newsItem.title}
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {newsItem.description}
              </p>
              
              {newsItem.content && newsItem.content !== newsItem.description && (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {newsItem.content}
                </p>
              )}
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-600">
                <p className="text-gray-600">
                  यह समाचार {newsItem.source} द्वारा प्रकाशित किया गया है। 
                  पूरी खबर पढ़ने के लिए मूल स्रोत पर जाएं।
                </p>
              </div>
            </div>

            {/* Source Link */}
            {newsItem.link && newsItem.link !== '#' && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  मूल स्रोत पर पढ़ें
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </article>

        {/* Related News */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">संबंधित समाचार</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news
              .filter(item => item.id !== newsItem.id)
              .slice(0, 4)
              .map(relatedNews => (
                <div key={relatedNews.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <NewsImage 
                        src={relatedNews.image} 
                        alt={relatedNews.title}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-3 flex-1">
                      <Link href={`/news/${relatedNews.id}`}>
                        <h3 className="font-semibold text-sm hover:text-red-600 cursor-pointer line-clamp-2">
                          {relatedNews.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';