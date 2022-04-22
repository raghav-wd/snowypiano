import { FunctionComponent, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Crotchet from '../assets/notes/Crotchet'
import WholeNote from '../assets/notes/WholeNote'
import { actionCreators, State } from '../store'
import { ClefType, NotePositionType, NoteType } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { useCaret } from '../hooks/useCaret'
import { ThemeTitles } from '../assets/data/themes'

type NoteProps = {
  h?: number
}

type NoteContainerProps = {
  row: number
  col: number
  state: NoteType
  clef: ClefType
}

const NoteContainer = styled.div<NoteContainerProps>`
  position: absolute;
  top: ${(props) =>
    (props.state.size / 2) * props.row +
    props.clef.lineThinkness * Math.floor((props.row + 2) / 2) -
    props.state.size / 2}px;
  left: ${(props) => (props.col / 12) * 96}vw;
  transition: 0.3s all;
`

const NoteComp: FunctionComponent<NoteProps> = () => {
  const note = useSelector((state: State) => state.root.theme.note)
  const clef = useSelector((state: State) => state.root.theme.clef)
  const noteState = useSelector((state: State) => state.randNotes)

  const dispatch = useDispatch()
  const { addNote } = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    for (let i = 2; i <= 12; i++) {
      const uuid = uuidv4()
      const note: NotePositionType = {
        row: Math.round(Math.random() * 16),
        col: i,
        uuid,
        class: '',
      }
      addNote([note])
    }
    console.log()
  }, [])
  useCaret()

  return (
    <>
      {noteState!.map((noteItem) => (
        <NoteContainer
          row={noteItem.row}
          col={noteItem.col}
          state={note}
          key={noteItem.uuid}
          clef={clef}
        >
          <Crotchet class={noteItem.class} />
        </NoteContainer>
      ))}
    </>
  )
}

export default NoteComp
