import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme-provider'
import GoogleAnalytics from '@/app/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://webd.one'),
  title: 'Webdone Create AI lannding page with AI ',
  description: 'Create Modern landing page with AI ,Chat With AI to  Make React modern Landing page ,AI Theme Generator And more Features',
  openGraph: {
    title: 'Webdone  - Create Custom Landing Pages with AI',
    description: 'Create Custom Landing page with AI ,React -Typscript/javascript , Chat Feature ,',
    type: 'website',
    url: 'https://webd.one',
    images: [{
      url: 'https://webd.one/twitter-card.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@weblikeai',
    creator: '@weblikeai',
    title: 'WebdoneCreate REACT Custom Landing Pages with AI For React ',
    description: 'Create React Landing page with AI,Chat with AI ,Drag-and-drop builder ',
    images: ['https://webd.one/twitter-card.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 <html lang="en">
      <body className={inter.className}>

          <ThemeProvider attribute="class" defaultTheme="White" enableSystem>
            {children}
            <GoogleAnalytics />
            <Toaster position="top-center" />
          </ThemeProvider>  
   
      </body>
    </html>
  )
}
