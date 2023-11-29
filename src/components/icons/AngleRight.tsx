import Image from 'next/image'

import { IconProps } from './interface'

const AngleRight = ({ height, width }: IconProps) => {
  return <Image src="/icons/angle-right.svg" alt="angle-right-icon" width={width || 22} height={height || 22} />
}

export default AngleRight
