import { themes } from '../../../assets/data/themes'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../../store'
import styled from 'styled-components'
import { overlayClass, SettingsContainerClass } from './styles'
import { useMidi } from '../../../hooks/useMidi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export const MIDI = (props: any) => {
  const dispatch = useDispatch()
  const theme = useSelector((state: State) => state.root.theme)

  const Overlay = styled.div`
    background-color: #1a1a1ac7;
  `

  const closeOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.target !== e.currentTarget ? '' : props.visibility(false)
  }

  const midiDevices = useMidi(true)
  console.log(midiDevices)

  return (
    <Overlay className={overlayClass} onClick={(e) => closeOverlay(e)}>
      <div className={SettingsContainerClass} style={{ backgroundColor: theme.secondary }}>
        <p className="text-center mb-2 text-xl" style={{ color: theme.secondaryText }}>
          MIDI Inputs
        </p>
        <div style={{ color: theme.secondaryText }} className="flex justify-between">
          {midiDevices ? '' : 'No devices found'}
          {midiDevices && midiDevices.name} {midiDevices && midiDevices.type}
          {midiDevices && midiDevices.state == 'connected' ? (
            <FontAwesomeIcon icon={faArrowsRotate} />
          ) : (
            <FontAwesomeIcon icon={faCircleExclamation} />
          )}
        </div>
      </div>
    </Overlay>
  )
}
