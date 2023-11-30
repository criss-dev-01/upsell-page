import { IconProps } from './interface'

const AngleLeft = ({ width, color }: IconProps) => {
  return (
    <svg width={width || 22} height={width || 22} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.75 4.50781L12.9414 3.75L6.25 10L12.9414 16.25L13.75 15.4961L7.87109 10L13.75 4.50781Z"
        fill={color || 'white'}
      />
    </svg>
  )
}

export default AngleLeft
