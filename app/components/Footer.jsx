export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">हिंदुस्तान न्यूज़</h3>
            <p className="text-gray-300">
              भारत की सबसे विश्वसनीय हिंदी न्यूज़ वेबसाइट
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">कैटेगरी</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">राजनीति</a></li>
              <li><a href="#" className="hover:text-white">मनोरंजन</a></li>
              <li><a href="#" className="hover:text-white">खेल</a></li>
              <li><a href="#" className="hover:text-white">तकनीक</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">लिंक्स</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">हमारे बारे में</a></li>
              <li><a href="#" className="hover:text-white">संपर्क करें</a></li>
              <li><a href="#" className="hover:text-white">गोपनीयता नीति</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">सोशल मीडिया</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; 2024 हिंदुस्तान न्यूज़. सर्वाधिकार सुरक्षित.</p>
        </div>
      </div>
    </footer>
  );
}