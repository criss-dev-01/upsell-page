'use client'
import { ReactNode, useState } from 'react'
import { Stack, Typography, IconButton } from '@mui/material'

// components
import {
  IconTruck,
  IconHeart,
  IconArrowCheckmark,
  IconCheckmarkStarburst,
  IconAngleLeft,
  IconAngleRight
} from '@/components/icons'

// styles
import styles from './NavbarInformation.module.css'

interface NavbarInformationItem {
  label: string
  icon: ReactNode
}

const ITEMS: NavbarInformationItem[] = [
  {
    label: '30-DAY SATISFACTION GUARANTEE',
    icon: <IconCheckmarkStarburst />
  },
  {
    label: 'Free delivery on orders over $40.00',
    icon: <IconTruck />
  },
  {
    label: '50.000+ HAPPY CUSTOMERS',
    icon: <IconHeart />
  },
  {
    label: '100% Money Back Guarantee',
    icon: <IconArrowCheckmark />
  }
]

const NavbarInformation = () => {
  /*********** state **********/
  const [itemToShow, setItemToShow] = useState<number>(0)

  /*********** functions **********/
  const handleNextItem = () => {
    if (itemToShow < 3) {
      setItemToShow(itemToShow + 1)
    } else {
      setItemToShow(0)
    }
  }

  const handleBackItem = () => {
    if (itemToShow > 0) {
      setItemToShow(itemToShow - 1)
    } else {
      setItemToShow(3)
    }
  }

  return (
    <Stack className={styles.infoBar} direction="row" justifyContent="space-between" alignItems="center">
      <Stack className={styles.action}>
        <IconButton aria-label="back-item" onClick={handleBackItem}>
          <IconAngleLeft />
        </IconButton>
      </Stack>
      {ITEMS.map((item, idx) => (
        <Stack
          className={`${styles.item} ${itemToShow === idx ? styles.active : ''}`}
          key={idx}
          direction="row"
          spacing={1}
          alignItems="center"
        >
          {item.icon}
          <Typography className={styles.labelInfo} variant="caption">
            {item.label}
          </Typography>
        </Stack>
      ))}
      <Stack className={styles.action}>
        <IconButton aria-label="back-item" onClick={handleNextItem}>
          <IconAngleRight />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default NavbarInformation
