import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Clef from '../components/Clef'
import { State } from '../store'

type ClefProps = {
  Clef: string
}

const StaffComp = styled.div<ClefProps>`
  background-color: ${(props) => props.Clef};
`

function Staff() {
  const theme = useSelector((state: State) => state.theme)
  return (
    <StaffComp Clef={theme.clef}>
      <Clef />
    </StaffComp>
  )
}

export default Staff
