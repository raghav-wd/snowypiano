import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../store'
import { ClefType } from '../types'
import Note from './Note'

type LineProps = {
  hide?: boolean
  state: ClefType
}

const Line = styled.div<LineProps>`
  box-sizing: border-box;
  border-top: ${(props) => props.state.lineThinkness}px solid
    ${(props) => (props.hide ? props.state.color : props.state.lineColor)};
  width: 100%;
  margin-bottom: ${(props) => props.state.lineSpace}px;
`

const ClefLines = styled.div`
  position: relative;
`

const Notations = styled.div`
  position: absolute;
  top: 0;
`

function Clef() {
  const clefState = useSelector((state: State) => state.root.theme.clef)
  return (
    <ClefLines className="cleffstaff h-4/6">
      <Line state={clefState} hide />
      <Line state={clefState} hide />
      <Line state={clefState} />
      <Line state={clefState} />
      <Line state={clefState} />
      <Line state={clefState} />
      <Line state={clefState} />
      <Line state={clefState} hide />
      <Line state={clefState} hide />
      <Notations>
        <Note />
      </Notations>
    </ClefLines>
  )
}

export default Clef
