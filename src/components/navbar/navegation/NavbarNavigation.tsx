import Image from 'next/image'

// components
import { AppBar, Toolbar, Stack } from '@mui/material'

// styles
import styles from './NavbarNavigation.module.css'

function NavbarNavigation() {
  return (
    <AppBar position="static" variant="outlined" color="transparent" elevation={0} className={styles.navigationBar}>
      <Toolbar disableGutters>
        <Stack className={styles.content} direction="row" justifyContent="space-between" alignItems="center">
          <Image
            src="/brand/clarifion-logo.png"
            className={styles.mainLogo}
            alt="clarifion-logo"
            height={36}
            width={192}
          />
          <Stack direction="row" spacing={2}>
            <Image
              src="/brand/mcAfee-logo.png"
              alt="mcAfee-logo"
              height={32}
              width={88}
              className={styles.secondaryLogo}
            />
            <Image
              src="/brand/norton-antivirus-logo.png"
              alt="norton-antivirus-logo"
              height={32}
              width={82}
              className={styles.secondaryLogo}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
export default NavbarNavigation
