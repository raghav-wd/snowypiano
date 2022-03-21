import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import WholeNote from '../assets/notation/WholeNote'
import { State } from '../store'
import { ClefConfig } from '../types'

type NoteProps = {
  h?: number
}

type NoteContainerProps = {
  row: number
  col: number
  clefConfig: ClefConfig
}

const NoteContainer = styled.div<NoteContainerProps>`
  position: absolute;
  top: ${(props) =>
    (props.clefConfig.notationSize / 2) * props.row +
    props.row -
    props.clefConfig.notationSize / 2}px;
  left: ${(props) => (props.col / 12) * 96}vw;
`

const Note: FunctionComponent<NoteProps> = () => {
  const theme = useSelector((state: State) => state.theme)
  const clefConfig = useSelector((state: State) => state.clefConfig)
  return (
    <>
      <NoteContainer row={2} col={1} clefConfig={clefConfig}>
        <WholeNote
          color={theme.notation}
          size={clefConfig.notationSize}
          thickness={clefConfig.lineThinkness}
        />
      </NoteContainer>
      <NoteContainer row={5} col={0} clefConfig={clefConfig}>
        <WholeNote
          color={theme.notation}
          size={clefConfig.notationSize}
          thickness={clefConfig.lineThinkness}
        />
      </NoteContainer>
    </>
  )
}

export default Note
