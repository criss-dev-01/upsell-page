import Image from 'next/image'

import { IconProps } from './interface'

const Heart = ({ height, width }: IconProps) => {
  return (
    <Image
      src="/icons/mdi_cards-heart-outline.svg"
      alt="heart-outline-icon"
      width={width || 22}
      height={height || 22}
    />
  )
}

export default Heart
