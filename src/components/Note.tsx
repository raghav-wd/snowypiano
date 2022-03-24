import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Crotchet from '../assets/notes/Crotchet'
import WholeNote from '../assets/notes/WholeNote'
import { State } from '../store'
import { NoteType } from '../types'

type NoteProps = {
  h?: number
}

type NoteContainerProps = {
  row: number
  col: number
  state: NoteType
}

const NoteContainer = styled.div<NoteContainerProps>`
  position: absolute;
  top: ${(props) => (props.state.size / 2) * props.row + props.row - props.state.size / 2}px;
  left: ${(props) => (props.col / 12) * 96}vw;
  transition: 0.3s all;
`

const NoteComp: FunctionComponent<NoteProps> = () => {
  const note = useSelector((state: State) => state.root.theme.note)
  return (
    <>
      <NoteContainer row={1} col={1} state={note}>
        {/* <WholeNote state={note} /> */}
      </NoteContainer>
      <NoteContainer row={11} col={2} state={note}>
        <Crotchet />
        {/* <WholeNote state={note} /> */}
      </NoteContainer>
      <NoteContainer row={5} col={3} state={note}>
        <Crotchet />
      </NoteContainer>
      <NoteContainer row={8} col={1} state={note}>
        <Crotchet />
      </NoteContainer>
    </>
  )
}

export default NoteComp
