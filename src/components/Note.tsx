import { FunctionComponent } from 'react'
import styled from 'styled-components'
import WholeNote from '../assets/notation/WholeNote'

const config = {
  lineThickness: 2,
  size: 56,
  color: 'black',
}

type NoteProps = {
  h?: number
}

type NoteContainerProps = {
  row: number
  col: number
}

const NoteContainer = styled.div<NoteContainerProps>`
  position: absolute;
  top: ${(props) => (config.size / 2) * props.row + props.row}px;
  left: ${5 * 1}vw;
`

const Note: FunctionComponent<NoteProps> = () => {
  return (
    <NoteContainer row={4} col={1}>
      <WholeNote color="black" size={config.size} thickness={config.lineThickness} />
    </NoteContainer>
  )
}

export default Note
