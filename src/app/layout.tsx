import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
const manrope = Manrope({ subsets: ['latin'] })

// components
import NavbarInformation from '@/components/navbar/information/NavbarInformation'
import NavbarNavigation from '@/components/navbar/navegation/NavbarNavigation'

export const metadata: Metadata = {
  title: 'Challenge Upsell Page',
  description: 'This is the technical challenge to enter Ejam Inc.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NavbarInformation />
        <NavbarNavigation />
        {children}
      </body>
    </html>
  )
}
