import Image from 'next/image'

import { IconProps } from './interface'

const CheckmarkStarburst = ({ height, width }: IconProps) => {
  return (
    <Image
      src="/icons/fluent_checkmark-starburst-20-regular.svg"
      alt="checkmark-starburst-regular-icon"
      width={width || 22}
      height={height || 22}
    />
  )
}

export default CheckmarkStarburst
