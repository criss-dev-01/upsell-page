import Image from 'next/image'

// MUI
import { Stack, Typography } from '@mui/material'

// components
import { IconStar } from '@/components/icons'

// styles
import styles from './ProductDetailInformationCurrent.module.css'

const ProductDetailInformationCurrent = () => {
  return (
    <Stack width="100%">
      <Stack spacing={1} direction="row" width="100%">
        <Image
          src="/product/product-1-alt.png"
          className={styles.productImageAlt}
          alt="product-1-alt"
          height={134}
          width={134}
        />
        <Stack className={styles.productContentAlt}>
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Typography className={styles.productTitleAlt}>Clarifion Air Ionizer</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography className={styles.productDiscountAlt} variant="caption">
                $180
              </Typography>
              <Typography className={styles.productPriceAlt} variant="body1">
                $84
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <IconStar color="#FFC000" width={18} />
            <IconStar color="#FFC000" width={18} />
            <IconStar color="#FFC000" width={18} />
            <IconStar color="#FFC000" width={18} />
            <IconStar color="#FFC000" width={18} />
          </Stack>
          <ul className={styles.list}>
            <li className={styles.listItem}>12 left in Stock</li>
          </ul>
          <Typography className={styles.comment} variant="body1">
            Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
          </Typography>
        </Stack>
      </Stack>
      <Typography className={`${styles.comment} ${styles.commentResponsive}`} variant="body1">
        Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
      </Typography>
    </Stack>
  )
}

export default ProductDetailInformationCurrent
