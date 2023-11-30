import Image from 'next/image'
// MUI
import { Stack, Button } from '@mui/material'

// components
import CardApp from '@/components/card/CardApp'
import ProductDetailComment from './ProductDetailComment'
import ProductDetailInformationTitle from './information/ProductDetailInformationTitle'
import ProductDetailInformationCurrent from './information/ProductDetailInformationCurrent'
import ProductDetailInformationList from './information/ProductDetailInformationList'
import ProductDetailInformationDiscount from './information/ProductDetailInformationDiscount'
import ProductDetailInformationShipping from './information/ProductDetailInformationShipping'

import { IconArrowRight } from '@/components/icons'

// styles
import styles from './ProductDetail.module.css'

const ProductDetail = () => {
  return (
    <CardApp>
      <Stack className={styles.cardProduct} justifyContent="space-between">
        <Stack className={styles.content}>
          <Image
            src="/product/product-1.png"
            className={styles.productImage}
            alt="product-1"
            height={491}
            width={475}
          />
          <ProductDetailComment />
        </Stack>
        <Stack className={styles.content}>
          <Stack className={styles.infoContent} direction="column">
            <ProductDetailInformationTitle />
            <ProductDetailInformationCurrent />
            <ProductDetailInformationList />
            <ProductDetailInformationDiscount />
            <Button endIcon={<IconArrowRight />} size="large" fullWidth className={styles.btnDiscount}>
              Yes - Claim my discount
            </Button>
            <ProductDetailInformationShipping />
          </Stack>
        </Stack>
      </Stack>
    </CardApp>
  )
}

export default ProductDetail
