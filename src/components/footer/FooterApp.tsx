import { Stack, Typography, Divider } from '@mui/material'
import { IconLock } from '@/components/icons'
import styles from './FooterApp.module.css'
const FooterApp = () => {
  return (
    <footer className={styles.footerApp}>
      <Stack direction="row" gap={3}>
        <Typography>Copyright (c) 2023</Typography>
        <Divider orientation="vertical" variant="middle" flexItem color="white" />
        <Typography>Clarifionsupport@clarifion.com</Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <IconLock color="#CFCFCF" />
        <Typography>Clarifionsupport@clarifion.com</Typography>
      </Stack>
    </footer>
  )
}

export default FooterApp
