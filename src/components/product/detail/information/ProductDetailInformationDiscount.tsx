// mui
import { Stack, Typography, Box } from '@mui/material'

// styles
import styles from './ProductDetailInformationDiscount.module.css'

const ProductDetailInformationDiscount = () => {
  return (
    <Stack width="100%">
      <Stack className={styles.discountCard}>
        <Box className={styles.badge}>%</Box>
        <Typography className={styles.text} variant="body1">
          Save <Typography variant="caption">53%</Typography> and{' '}
          <Typography variant="caption">get 6 extra Clarifision</Typography> for only{' '}
          <Typography variant="caption">$14 Each</Typography>.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ProductDetailInformationDiscount
