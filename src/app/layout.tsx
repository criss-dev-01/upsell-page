import { ReactNode } from 'react'
import { Box } from '@mui/material'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

import './globals.css'
import styles from './layout.module.css'

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
        <Box className={styles.layoutApp}>{children}</Box>
      </body>
    </html>
  )
}
