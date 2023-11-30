import { Typography } from '@mui/material'
import StepBar, { Step } from '@/components/step/StepBar'
// styles
import styles from './HomeView.module.css'

const STEPS_PAGE: Step[] = [
  { label: 'Step 1 : Cart Review', status: 'done' },
  { label: 'Step 2 : Checkout', status: 'done' },
  { label: 'Step 3 : Special Offer', status: 'current' },
  { label: 'Step 4 : Confirmation', status: 'next' }
]

const HomeView = () => {
  return (
    <main>
      <Typography className={styles.title} variant="h1" textAlign="center">
        Wait ! your order in progress.
      </Typography>
      <Typography className={styles.paragraph} variant="body2" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Typography>
      <StepBar steps={STEPS_PAGE} />
    </main>
  )
}

export default HomeView
