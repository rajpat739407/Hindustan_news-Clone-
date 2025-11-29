import { searchNews } from '../utils/newsParser';
import NewsCard from '../components/NewsCard';

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || '';
  
  let searchResults = [];
  let error = null;

  if (query) {
    try {
      searchResults = await searchNews(query);
    } catch (err) {
      error = err.message;
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {query ? `"${query}" के लिए खोज परिणाम` : 'खोजें'}
          </h1>
          {query && (
            <p className="text-gray-600">
              {searchResults.length > 0 
                ? `${searchResults.length} परिणाम मिले` 
                : 'कोई परिणाम नहीं मिला'}
            </p>
          )}
        </div>

        {/* Search Results */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            खोज में त्रुटि: {error}
          </div>
        )}

        {query && searchResults.length === 0 && !error && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              कोई समाचार नहीं मिला
            </h3>
            <p className="text-gray-500">
              कृपया कोई अन्य खोज शब्द आज़माएं
            </p>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        )}

        {!query && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">
                किसी विषय में खोजें
              </h3>
              <p className="text-gray-500 mb-6">
                राजनीति, मनोरंजन, खेल, तकनीक, या किसी अन्य विषय में समाचार खोजें
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['राजनीति', 'मनोरंजन', 'खेल', 'तकनीक', 'व्यवसाय', 'स्वास्थ्य'].map((topic) => (
                  <a
                    key={topic}
                    href={`/search?q=${encodeURIComponent(topic)}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    {topic}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const revalidate = 300;