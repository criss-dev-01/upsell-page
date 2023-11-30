import { IconProps } from './interface'

const ArrowRight = ({ width, color }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 22} height={width || 22} viewBox="0 0 18 15" fill="none">
      <path
        d="M17.0806 8.19875C17.4665 7.81284 17.4665 7.18716 17.0806 6.80125L10.7918 0.512475C10.4059 0.126565 9.78022 0.126565 9.39431 0.512475C9.0084 0.898386 9.0084 1.52407 9.39431 1.90998L14.9843 7.5L9.39431 13.09C9.0084 13.4759 9.0084 14.1016 9.39431 14.4875C9.78022 14.8734 10.4059 14.8734 10.7918 14.4875L17.0806 8.19875ZM0.381836 8.48819H16.3818V6.51181H0.381836V8.48819Z"
        fill={color || 'white'}
      />
    </svg>
  )
}

export default ArrowRight
