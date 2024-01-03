import type { Metadata } from 'next'
import './globals.css'


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
        {children}
      </body>
    </html>
  )
}
