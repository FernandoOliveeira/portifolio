import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Portifolio contendo os projetos criados durante os estudos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <Navbar />
        
        <main className='relative overflow-hidden'>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
