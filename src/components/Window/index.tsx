import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { actionCreators, State } from '../../store'
import { overlayClass, SettingsContainerClass } from './styles'
import { url } from 'inspector'

export const Window = (props: any) => {
  const theme = useSelector((state: State) => state.root.theme)

  const Overlay = styled.div`
    background-color: #1a1a1ac7;
  `

  return (
    <div className="mobile-unsupport">
      <Overlay
        className={overlayClass}
        style={{
          backgroundImage: `url(assets/images/piano.jpg)`,
          backgroundOrigin: 'cover',
          backgroundPosition: 'center',
        }}>
        <div
          className={SettingsContainerClass}
          style={{ backgroundColor: theme.secondary, opacity: 0.75 }}>
          <p
            className="text-center mb-4"
            style={{ color: theme.secondaryText, fontSize: '20px', textDecoration: 'underline' }}>
            Snowy Piano
          </p>
          <p className="text-center mb-2" style={{ color: theme.secondaryText }}>
            does not support on mobile devices
          </p>
        </div>
      </Overlay>
    </div>
  )
}
