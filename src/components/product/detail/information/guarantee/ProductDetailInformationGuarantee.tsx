import Image from 'next/image'
import { Stack, Typography } from '@mui/material'
import styles from './ProductDetailInformationGuarantee.module.css'
const ProductDetailInformationGuarantee = () => {
  return (
    <Stack spacing={1} direction="row" width="100%" alignItems="center">
      <Image src="/guarantee.png" alt="Guarantee-logo" height={88} width={88} />
      <Typography className={styles.guaranteeText} variant="body1">
        If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please
        refer to our return policy at the bottom of the page for more details. Happy Shopping!
      </Typography>
    </Stack>
  )
}

export default ProductDetailInformationGuarantee
