import Image from 'next/image'

import { IconProps } from './interface'

const ArrowCheckmark = ({ height, width }: IconProps) => {
  return (
    <Image
      src="/icons/fluent_arrow-sync-checkmark-20-regular.svg"
      alt="arrow-checkmark-icon"
      width={width || 22}
      height={height || 22}
    />
  )
}

export default ArrowCheckmark
