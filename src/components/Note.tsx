import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import WholeNote from '../assets/notation/WholeNote'
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
`

const NoteComp: FunctionComponent<NoteProps> = () => {
  const note = useSelector((state: State) => state.root.theme.note)
  return (
    <>
      <NoteContainer row={2} col={1} state={note}>
        <WholeNote state={note} />
      </NoteContainer>
      <NoteContainer row={5} col={0} state={note}>
        <WholeNote state={note} />
      </NoteContainer>
    </>
  )
}

export default NoteComp
