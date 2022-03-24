import { FunctionComponent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Crotchet from '../assets/notes/Crotchet'
import WholeNote from '../assets/notes/WholeNote'
import { useRandomNotes } from '../hooks/useRandomNotes'
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
  const arr = useRandomNotes()
  useEffect(() => {
    console.log(arr)
  }, [])
  return (
    <>
      {arr.map((noteItem) => (
        <NoteContainer row={noteItem.row} col={noteItem.col} state={note} key={noteItem.col}>
          <Crotchet />
        </NoteContainer>
      ))}
    </>
  )
}

export default NoteComp
