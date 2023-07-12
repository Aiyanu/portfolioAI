import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'
import { Inter, Rubik } from "next/font/google";
import {  } from "next/font/google";

export const rubik = Rubik({ weight: "600", subsets: ["latin"] });

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+"bg-primary min-h-screen grid "}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
