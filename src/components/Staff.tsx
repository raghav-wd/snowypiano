import styled from 'styled-components'
import Note from './Note'

const Clef = styled.div``

const config = {
  lineThickness: 2,
  gap: 56,
  color: 'black',
}

type LineProps = {
  hide?: boolean
}

const Line = styled.div<LineProps>`
  background-color: ${(props) => (props.hide ? 'white' : config.color)};
  width: 100%;
  height: ${config.lineThickness}px;
  margin-bottom: ${config.gap}px;
`

const StaffLines = styled.div`
  position: relative;
`

const Notations = styled.div`
  position: absolute;
  top: 0;
`

function Staff() {
  return (
    <div>
      <StaffLines className="cleffstaff bg-slate-100 h-4/6">
        <Line hide />
        <Line hide />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line hide />
        <Line hide />
        <Notations>
          <Note />
        </Notations>
      </StaffLines>
    </div>
  )
}

export default Staff
