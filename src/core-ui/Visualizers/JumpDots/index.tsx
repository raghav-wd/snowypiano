import styled from 'styled-components'
import { Dot } from './Dot'

export const JumpDots = () => {
  // useVisualizer()
  return (
    <>
      {[...Array(88)].map((_, i) => (
        <Dot key={i} index={i} />
      ))}
    </>
  )
}
