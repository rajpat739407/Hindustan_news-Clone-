'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-red-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-4">
              <div className="bg-red-600 text-white p-3 rounded-lg">
                <span className="text-xl font-bold">हिंदुस्तान</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">न्यूज़</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">
              मुख्य समाचार
            </Link>
            <Link href="/search?q=राजनीति" className="text-gray-700 hover:text-red-600 font-medium">
              राजनीति
            </Link>
            <Link href="/search?q=मनोरंजन" className="text-gray-700 hover:text-red-600 font-medium">
              मनोरंजन
            </Link>
            <Link href="/search?q=खेल" className="text-gray-700 hover:text-red-600 font-medium">
              खेल
            </Link>
          </nav>

          {/* Search */}
          <div className="w-full md:w-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="खोजें..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button 
                type="submit"
                className="absolute right-3 top-2 text-gray-500 hover:text-red-600"
              >
                🔍
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}