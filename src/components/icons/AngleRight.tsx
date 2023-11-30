import { IconProps } from './interface'

const AngleRight = ({ width, color }: IconProps) => {
  return (
    <svg width={width || 22} height={width || 22} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.25 4.50781L7.05859 3.75L13.75 10L7.05859 16.25L6.25 15.4961L12.1289 10L6.25 4.50781Z"
        fill={color || 'white'}
      />
    </svg>
  )
}

export default AngleRight
