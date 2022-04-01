import styled from 'styled-components'
import { getRandomColor } from '../../../utility/getRandomColor'

type DotProps = {
  color: string
}

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  display: inline-block;
  margin: 0 2px 0 2px;
  background-color: ${(props) => props.color};
`

export const JumpDots = () => {
  return (
    <>
      {[...Array(88)].map((_, i) => (
        <Dot key={i} color={getRandomColor()} />
      ))}
    </>
  )
}
