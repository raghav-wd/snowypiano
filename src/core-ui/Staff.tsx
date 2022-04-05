import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Clef from '../components/Clef'
import { State } from '../store'
import { ClefType } from '../types'

type ClefProps = {
  state: ClefType
}

const StaffComp = styled.div<ClefProps>`
  background-color: ${(props) => props.state.color};
`

function Staff() {
  const state = useSelector((state: State) => state.root)
  return (
    <StaffComp state={state.theme.clef}>
      <Clef />
    </StaffComp>
  )
}

export default Staff
