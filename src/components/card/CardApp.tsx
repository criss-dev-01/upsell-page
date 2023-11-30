import { ReactNode } from 'react'
import styles from './CardApp.module.css'

const CardApp = ({ children }: { children: ReactNode }) => {
  return <div className={styles.cardApp}>{children}</div>
}

export default CardApp
