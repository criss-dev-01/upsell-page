import Image from 'next/image'

import { IconProps } from './interface'

const AngleLeft = ({ height, width }: IconProps) => {
  return <Image src="/icons/angle-left.svg" alt="angle-left-icon" width={width || 22} height={height || 22} />
}

export default AngleLeft
