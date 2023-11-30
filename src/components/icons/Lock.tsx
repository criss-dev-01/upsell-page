import { IconProps } from './interface'

const Lock = ({ width, color }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 22} height={width || 22} viewBox="0 0 12 13" fill="none">
      <g clipPath="url(#clip0_1_137)">
        <path
          d="M9.125 5.99902H2.125C1.57272 5.99902 1.125 6.44674 1.125 6.99902V10.499C1.125 11.0513 1.57272 11.499 2.125 11.499H9.125C9.67729 11.499 10.125 11.0513 10.125 10.499V6.99902C10.125 6.44674 9.67729 5.99902 9.125 5.99902Z"
          stroke={color || 'white'}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.12598 5.99902V3.99902C3.12598 3.33598 3.38937 2.7001 3.85821 2.23126C4.32705 1.76242 4.96294 1.49902 5.62598 1.49902C6.28902 1.49902 6.9249 1.76242 7.39374 2.23126C7.86258 2.7001 8.12598 3.33598 8.12598 3.99902V5.99902"
          stroke={color || 'white'}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_137">
          <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Lock
