import { fetchTopHeadlines } from './utils/newsParser';
import HeroSection from './components/HeroSection';
import NewsCard from './components/NewsCard';

export default async function Home() {
  let news;
  let error = null;

  try {
    news = await fetchTopHeadlines();
  } catch (err) {
    error = err.message;
    news = [];
  }

  if (error) {
    console.error('Error fetching news:', error);
  }

  if (!news || news.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            समाचार उपलब्ध नहीं हैं
          </h2>
          <p className="text-gray-500">
            कृपया बाद में पुनः प्रयास करें
          </p>
        </div>
      </div>
    );
  }

  const featuredNews = news.slice(0, 3);
  const regularNews = news.slice(3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection featuredNews={featuredNews} />

      {/* Regular News Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
            ताज़ा समाचार
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularNews.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const revalidate = 300;