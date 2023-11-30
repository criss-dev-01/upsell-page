import { IconProps } from './interface'

const Checkmark = ({ width, color }: IconProps) => {
  return (
    <svg width={width || 22} height={width || 22} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="tick-circle">
        <g id="vuesax/linear/tick-circle">
          <g id="tick-circle_2">
            <path
              id="Vector"
              d="M1.99977 9L8.65859 16L21.9998 2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={color || 'white'}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Checkmark
