import Image from 'next/image'
// MUI
import { Stack, Button } from '@mui/material'

// components
import CardApp from '@/components/card/CardApp'
import ProductDetailComment from './comment/ProductDetailComment'
import ProductDetailInformationTitle from './information/title/ProductDetailInformationTitle'
import ProductDetailInformationCurrent from './information/current/ProductDetailInformationCurrent'
import ProductDetailInformationList from './information/list/ProductDetailInformationList'
import ProductDetailInformationDiscount from './information/discount/ProductDetailInformationDiscount'
import ProductDetailInformationShipping from './information/shipping/ProductDetailInformationShipping'
import ProductDetailInformationGuarantee from './information/guarantee/ProductDetailInformationGuarantee'

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
            <Button color="error" size="large" fullWidth className={styles.btnNoThanks}>
              No thanks, I don’t want this.
            </Button>
            <ProductDetailInformationGuarantee />
          </Stack>
        </Stack>
      </Stack>
    </CardApp>
  )
}

export default ProductDetail
