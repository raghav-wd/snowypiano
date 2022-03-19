import { FunctionComponent } from 'react'
import { transform } from 'typescript'

type WholeNoteProps = {
  color: string
  size: number
  thickness: number
}

const WholeNote: FunctionComponent<WholeNoteProps> = ({ size, color, thickness }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 720 720"
    width={size}
    height={size}
    style={{ transform: `translateY(${thickness}px)` }}>
    <path
      style={{
        fill: color,
      }}
      d="M339.03 493.9c166.28 1.498 323.57 64.413 335.55 203.73 8.98 101.9-125.84 194.73-292.11 194.73-167.78-1.5-323.57-62.91-337.05-202.18C36.433 586.73 172.66 493.9 339.03 493.9zm40.352 364.01c71.903 0 118.34-68.954 110.85-124.33-16.478-109.35-53.928-197.78-152.79-197.78-71.903 0-113.85 70.405-104.86 125.83 16.571 109.4 48.029 196.28 146.8 196.28z"
      transform="translate(0 -332.36)"
    />
  </svg>
)

export default WholeNote