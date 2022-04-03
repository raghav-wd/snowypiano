import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../../../store'
import { getRandomColor } from '../../../utility/getRandomColor'

type DotProps = {
  color: string
  isActive: boolean
}

const DotDiv = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  display: inline-block;
  margin: 0 2px 0 2px;
  transition: all 0.15s ease-out;
  transform: ${(props) => (props.isActive ? `translateY(-70px)` : 0)};
  background-color: ${(props) => props.color};
`

export const Dot = (props: any) => {
  const state = useSelector((state: State) => state.visualizer)
  const theme = useSelector((state: State) => state.root.theme)
  return <DotDiv isActive={state[props.index]} color={theme.note.color} />
}
