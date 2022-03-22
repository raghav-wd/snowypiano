import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../store'
import { ClefConfig } from '../types'
import Note from './Note'

type LineProps = {
  hide?: boolean
  clefConfig: ClefConfig
}

const Line = styled.div<LineProps>`
  box-sizing: border-box;
  /* background-color: ${(props) => props.color}; */
  border-top: ${(props) => props.clefConfig.lineThinkness}px solid ${(props) => props.color};
  width: 100%;
  /* height: ${(props) => props.clefConfig.lineThinkness}px; */
  margin-bottom: ${(props) => props.clefConfig.lineSpace}px;
`

const ClefLines = styled.div`
  position: relative;
`

const Notations = styled.div`
  position: absolute;
  top: 0;
`

function Clef() {
  const theme = useSelector((state: State) => state.theme)
  const clefConfig = useSelector((state: State) => state.clefConfig)
  return (
    <ClefLines className="cleffstaff h-4/6">
      <Line clefConfig={clefConfig} color={theme.clef} hide />
      <Line clefConfig={clefConfig} color={theme.clef} hide />
      <Line clefConfig={clefConfig} color={theme.line} />
      <Line clefConfig={clefConfig} color={theme.line} />
      <Line clefConfig={clefConfig} color={theme.line} />
      <Line clefConfig={clefConfig} color={theme.line} />
      <Line clefConfig={clefConfig} color={theme.line} />
      <Line clefConfig={clefConfig} color={theme.clef} hide />
      <Line clefConfig={clefConfig} color={theme.clef} hide />
      <Notations>
        <Note />
      </Notations>
    </ClefLines>
  )
}

export default Clef
