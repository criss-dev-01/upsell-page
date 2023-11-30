import Image from 'next/image'

import { IconProps } from './interface'

const Checkmark = ({ height, width }: IconProps) => {
  return <Image src="/icons/tick-circle.svg" alt="tick-circle-icon" width={width || 22} height={height || 22} />
}

export default Checkmark
