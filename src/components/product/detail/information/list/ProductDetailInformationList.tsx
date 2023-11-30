// mui
import { Stack, Typography } from '@mui/material'

// components
import { IconCheckmark } from '@/components/icons'

import styles from './ProductDetailInformationList.module.css'

const ProductDetailInformationList = () => {
  return (
    <Stack className={styles.listCheck}>
      <Typography variant="body1" display="flex" alignItems="center" gap={1}>
        <IconCheckmark color="#2C7EF8" /> Negative Ion Technology may <b>help with allergens</b>
      </Typography>
      <Typography variant="body1" display="flex" alignItems="center" gap={1}>
        <IconCheckmark color="#2C7EF8" /> Designed for <b>air rejuvenation</b>
      </Typography>
      <Typography variant="body1" display="flex" alignItems="center" gap={1}>
        <IconCheckmark color="#2C7EF8" /> <b>Perfect for every room</b> in all types of places.
      </Typography>
    </Stack>
  )
}

export default ProductDetailInformationList
