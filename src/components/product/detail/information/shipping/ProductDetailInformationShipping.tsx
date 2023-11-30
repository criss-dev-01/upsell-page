import Image from 'next/image'

import { Stack, Typography, Divider } from '@mui/material'

import styles from './ProductDetailInformationShipping.module.css'

import { IconLock } from '@/components/icons'

const ProductDetailInformationShipping = () => {
  return (
    <Stack width="100%">
      <Stack className={styles.cardShipping} direction="row" justifyContent="space-between">
        <Stack>
          <Typography variant="caption">Free shipping</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem color="#CFCFCF" />
        <Stack direction="row" alignItems="center" gap={1}>
          <IconLock color="#CFCFCF" />
          <Typography variant="caption">Secure 256-bit SSL encryption.</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem color="#CFCFCF" />
        <Stack direction="row">
          <Image src="/cards/visa.png" alt="visa-icon" width={24} height={14} />
          <Image src="/cards/shopPay.png" alt="shop-pay-icon" width={24} height={14} />
          <Image src="/cards/paypal.png" alt="paypal-icon" width={24} height={14} />
          <Image src="/cards/mastercard.png" alt="mastercard-icon" width={24} height={14} />
          <Image src="/cards/gpay.png" alt="gpay-icon" width={24} height={14} />
          <Image src="/cards/applePay.png" alt="apple-pay-icon" width={24} height={14} />
          <Image src="/cards/amex.png" alt="amex-icon" width={24} height={14} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ProductDetailInformationShipping
