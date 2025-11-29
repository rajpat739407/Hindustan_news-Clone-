import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          पृष्ठ नहीं मिला
        </h2>
        <p className="text-gray-500 mb-8">
          क्षमा करें, आप जिस पृष्ठ को ढूंढ रहे हैं वह उपलब्ध नहीं है।
        </p>
        <Link
          href="/"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          मुख्य पृष्ठ पर वापस जाएं
        </Link>
      </div>
    </div>
  );
}