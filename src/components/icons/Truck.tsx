import Image from 'next/image'

import { IconProps } from './interface'

const Truck = ({ height, width }: IconProps) => {
  return <Image src="/icons/ph_truck-light.svg" alt="truck-light-icon" width={width || 22} height={height || 22} />
}

export default Truck
