import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../store'
import { ClefConfig } from '../types'
import Note from './Note'

const config = {
  lineThickness: 2,
  gap: 56,
  color: 'black',
}

type LineProps = {
  hide?: boolean
  clefConfig: ClefConfig
}

const Line = styled.div<LineProps>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: ${(props) => props.clefConfig.lineThinkness}px;
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
    <div>
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
    </div>
  )
}

export default Clef
