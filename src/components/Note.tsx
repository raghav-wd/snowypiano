import { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Crotchet from '../assets/notes/Crotchet'
import WholeNote from '../assets/notes/WholeNote'
import { actionCreators, State } from '../store'
import { NotePositionType, NoteType } from '../types'

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
  const noteState = useSelector((state: State) => state.randNotes)

  const dispatch = useDispatch()
  const { addNote } = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    for (let i = 1; i <= 12; i++) {
      const note: NotePositionType = { row: Math.round(Math.random() * 16), col: i }
      addNote([note])
    }
  }, [])
  return (
    <>
      {noteState.map((noteItem) => (
        <NoteContainer
          row={noteItem.row}
          col={noteItem.col}
          state={note}
          key={Math.round(Math.random() * 1000)}>
          <Crotchet />
        </NoteContainer>
      ))}
    </>
  )
}

export default NoteComp
