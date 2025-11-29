import { XMLParser } from 'fast-xml-parser';

// Generate stable IDs based on content
function generateStableId(title, source) {
  // Create a simple hash from title and source
  const str = `${title}-${source}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString();
}

export async function fetchTopHeadlines() {
  try {
    const apiKey = process.env.GNEWS_API_KEY;
    if (!apiKey) {
      throw new Error('GNews API key not found');
    }

    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=general&lang=hi&country=in&max=20&apikey=${apiKey}`,
      {
        next: { revalidate: 300 } // 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      return getMockNews();
    }

    const news = data.articles.map((article, index) => {
      // Generate stable ID that won't change between requests
      const stableId = generateStableId(article.title, article.source?.name || 'GNews');
      
      return {
        id: stableId,
        title: article.title || 'No title available',
        description: article.description || 'No description available',
        image: article.image || '/placeholder-news.jpg',
        link: article.url || '#',
        pubDate: article.publishedAt || new Date().toISOString(),
        source: article.source?.name || 'GNews',
        content: article.content || '',
        guid: article.url || stableId
      };
    });

    return news;
  } catch (error) {
    console.error('Error fetching news from GNews:', error);
    // Fallback to mock data
    return getMockNews();
  }
}

export async function searchNews(query) {
  try {
    const apiKey = process.env.GNEWS_API_KEY;
    if (!apiKey) {
      throw new Error('GNews API key not found');
    }

    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=hi&country=in&max=20&apikey=${apiKey}`,
      {
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      return [];
    }

    const news = data.articles.map((article, index) => {
      const stableId = generateStableId(article.title, article.source?.name || 'GNews');
      
      return {
        id: stableId,
        title: article.title || 'No title available',
        description: article.description || 'No description available',
        image: article.image || '/placeholder-news.jpg',
        link: article.url || '#',
        pubDate: article.publishedAt || new Date().toISOString(),
        source: article.source?.name || 'GNews',
        content: article.content || '',
        guid: article.url || stableId
      };
    });

    return news;
  } catch (error) {
    console.error('Error searching news:', error);
    return [];
  }
}

// Mock data for fallback with stable IDs
function getMockNews() {
  const mockArticles = [
    {
      title: 'भारत में तकनीकी क्षेत्र में नई उपलब्धियाँ',
      description: 'भारत के तकनीकी क्षेत्र में नई उपलब्धियों ने विश्व भर में ध्यान आकर्षित किया है। देश के युवा इंजीनियरों और वैज्ञानिकों ने अभूतपूर्व सफलता हासिल की है।',
      source: 'GNews'
    },
    {
      title: 'खेल जगत में भारत का परचम',
      description: 'भारतीय खिलाड़ियों ने अंतर्राष्ट्रीय स्पर्धाओं में शानदार प्रदर्शन करते हुए कई पदक जीते हैं।',
      source: 'GNews'
    },
    {
      title: 'राजनीतिक समाचार: नई नीतियों की घोषणा',
      description: 'सरकार द्वारा नई आर्थिक नीतियों की घोषणा से बाजारों में उत्साह देखने को मिल रहा है।',
      source: 'GNews'
    }
  ];

  return mockArticles.map((article, index) => {
    const stableId = generateStableId(article.title, article.source);
    
    return {
      id: stableId,
      title: article.title,
      description: article.description,
      image: '/placeholder-news.jpg',
      link: '#',
      pubDate: new Date().toISOString(),
      source: article.source,
      content: article.description + ' यह उपलब्धि देश की तकनीकी क्षेत्र में बढ़ती क्षमता को दर्शाती है।',
      guid: stableId
    };
  });
}