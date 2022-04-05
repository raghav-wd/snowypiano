import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../../../store'
import { ThemeState } from '../../../types/state'

type DotProps = {
  theme: ThemeState
  color: string
  isActive: boolean
}

const DotDiv = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  margin: 0 2px 0 2px;
  transition: all 0.15s ease-out;
  transform: ${(props) => (props.isActive ? `translateY(-70px)` : 0)};
  opacity: ${(props) => (props.isActive ? 1 : 0.4)};
  background-color: ${(props) => (props.isActive ? props.color : props.theme.note.color)};
`

export const Dot = (props: any) => {
  const state = useSelector((state: State) => state.visualizerNotes)
  const theme = useSelector((state: State) => state.root.theme)
  return (
    <DotDiv isActive={state[props.index].isActive} color={state[props.index].color} theme={theme} />
  )
}
