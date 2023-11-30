import { Typography } from '@mui/material'
import styles from './ProductDetailInformationTitle.module.css'
const ProductDetailInformationTitle = () => {
  return (
    <Typography className={styles.titleProduct} variant="h2">
      <Typography variant="caption">ONE TIME ONLY</Typography> special price for 6 extra Clarifion for only
      <Typography variant="caption">$14 each</Typography> ($84.00 total!)
    </Typography>
  )
}

export default ProductDetailInformationTitle
