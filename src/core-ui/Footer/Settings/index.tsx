import { themes } from '../../../assets/data/themes'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../../store'
import styled from 'styled-components'
import { overlayClass, SettingsContainerClass } from './styles'
import { ThemeState } from '../../../types'
import { LayoutTeaser } from '../../../components/LayoutTeaser'
import { ClefTeaser } from '../../../components/CleffTeasere'
import { useEffect } from 'react'
import { LayoutActionType } from '../../../store/action-types'

export const Settings = (props: any) => {
  const theme = useSelector((state: State) => state.root.theme)

  const Overlay = styled.div`
    background-color: #1a1a1ac7;
  `

  const closeOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.target !== e.currentTarget ? '' : props.visibility(false)
  }

  return (
    <Overlay className={overlayClass} onClick={(e) => closeOverlay(e)}>
      <div className={SettingsContainerClass} style={{ backgroundColor: theme.secondary }}>
        <p className="text-center mb-2 text-xl" style={{ color: theme.secondaryText }}>
          Settings
        </p>
        <p className="mb-4" style={{ color: theme.secondaryText }}>
          View mode
        </p>
        <div className="overflow-auto flex flex-row justify-between">
          <LayoutTeaser mode={LayoutActionType.showAll} title="Full" />
          <LayoutTeaser
            mode={LayoutActionType.hideVisualizer}
            hideVisualizer
            title="No Visualizer"
          />
          <LayoutTeaser mode={LayoutActionType.hideStaff} hideStaff title="No Cleff" />
        </div>
        <p className="mb-4" style={{ color: theme.secondaryText }}>
          Cleff
        </p>
        <div className="flex flex-row">
          <ClefTeaser />
        </div>
      </div>
    </Overlay>
  )
}
