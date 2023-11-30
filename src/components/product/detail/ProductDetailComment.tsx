import { Stack, Avatar, Typography } from '@mui/material'
import CardApp from '@/components/card/CardApp'
import styles from './ProductDetailComment.module.css'
import { IconStar, IconCheckmarkStarburstFill } from '@/components/icons'
const ProductDetailComment = () => {
  return (
    <CardApp>
      <Stack className={styles.userCard}>
        <Stack direction="row" spacing={2}>
          <Avatar className={styles.userPhoto} alt="user-photo" src="/user.png" />
          <Stack>
            <Stack direction="row" spacing={1}>
              <IconStar color="#FFC000" width={18} />
              <IconStar color="#FFC000" width={18} />
              <IconStar color="#FFC000" width={18} />
              <IconStar color="#FFC000" width={18} />
              <IconStar color="#FFC000" width={18} />
            </Stack>
            <Stack direction="row" alignItems="end" spacing={1}>
              <Typography className={styles.userName} variant="body1">
                Ken T.
              </Typography>
              <IconCheckmarkStarburstFill color="#5BB59A" width={16} />
              <Typography className={styles.userVerification} variant="caption">
                Verified Customer
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography className={styles.comment} variant="body1">
            “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to
            the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
          </Typography>
        </Stack>
      </Stack>
    </CardApp>
  )
}

export default ProductDetailComment
