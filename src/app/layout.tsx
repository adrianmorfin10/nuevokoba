import './globals.css'
import { Play, Lato } from 'next/font/google'

const play = Play({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-play'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${play.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-koba-black text-koba-white font-lato">
        {children}
      </body>
    </html>
  )
}