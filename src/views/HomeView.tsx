import { Typography } from '@mui/material'
import styles from './HomeView.module.css'
const HomeView = () => {
  return (
    <main>
      <Typography className={styles.title} variant="h1" textAlign="center">
        Wait ! your order in progress.
      </Typography>
      <Typography className={styles.paragraph} variant="body2" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Typography>
    </main>
  )
}

export default HomeView
