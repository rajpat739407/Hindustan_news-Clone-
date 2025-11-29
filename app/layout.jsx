import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'हिंदुस्तान न्यूज़ - भारत की विश्वसनीय हिंदी न्यूज़',
  description: 'हिंदुस्तान न्यूज़ पर पढ़ें ताज़ा समाचार, ब्रेकिंग न्यूज़, राजनीति, मनोरंजन, खेल और बिज़नेस से जुड़ी खबरें',
  keywords: 'हिंदी न्यूज़, समाचार, ब्रेकिंग न्यूज़, भारत, राजनीति, मनोरंजन, खेल',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
