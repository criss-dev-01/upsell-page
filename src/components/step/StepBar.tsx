import { Stack, Box, Typography } from '@mui/material'
import { IconCheckmark } from '@/components/icons'

import styles from './StepBar.module.css'

export interface Step {
  label: string
  status: 'done' | 'current' | 'next'
}

interface StepBarProps {
  steps: Step[]
}

const StepBar = ({ steps }: StepBarProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {steps.map((step, idx) => (
        <Stack className={styles.stepItem} key={idx} direction="row" alignItems="center" spacing={1}>
          {step.status === 'done' && (
            <Box className={`${styles.stepBadgeDone} ${styles.badge}`}>
              <IconCheckmark height={16} width={16} />
            </Box>
          )}
          {step.status === 'current' && (
            <Box className={`${styles.stepBadgeCurrent} ${styles.badge}`}>
              <Typography variant="caption">{idx + 1}</Typography>
            </Box>
          )}
          {step.status === 'next' && (
            <Box className={`${styles.stepBadgeNext} ${styles.badge}`}>
              <Typography variant="caption">{idx + 1}</Typography>
            </Box>
          )}
          <Typography
            className={`${styles.stepLabel}`}
            fontWeight={step.status === 'current' ? '600' : '500'}
            variant="caption"
          >
            {step.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default StepBar
