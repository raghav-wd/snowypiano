import { themes } from '../../../assets/data/themes'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../../store'
import styled from 'styled-components'
import { overlayClass, themeListContainerClass } from './styles'
import { ThemeState } from '../../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export const ThemeList = (props: any) => {
  const dispatch = useDispatch()
  const { changeTheme } = bindActionCreators(actionCreators, dispatch)
  const theme = useSelector((state: State) => state.root.theme)

  const Overlay = styled.div`
    background-color: #1a1a1ac7;
  `

  type ThemeListItemProps = {
    themeState: ThemeState
  }

  const ThemeListItem = styled.div<ThemeListItemProps>`
    color: ${(props) => props.themeState.secondaryText};
  `

  const closeOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.target !== e.currentTarget ? '' : props.visibility(false)
  }

  useEffect(() => {
    console.log(theme.name)
  }, [theme])

  return (
    <Overlay className={overlayClass} onClick={(e) => closeOverlay(e)}>
      <div className={themeListContainerClass} style={{ backgroundColor: theme.secondary }}>
        <p className="text-center mb-2 text-xl" style={{ color: theme.secondaryText }}>
          Themes
        </p>
        <div className="overflow-auto h-full">
          {themes.map((i) => (
            <ThemeListItem
              className="mb-1 p-2 cursor-pointer"
              key={uuidv4()}
              onClick={() => changeTheme(i.title)}
              themeState={theme}>
              {i.title.replace('_', ' ')}
              {theme.name == i.title ? <FontAwesomeIcon className="mx-2" icon={faCheck} /> : ''}
            </ThemeListItem>
          ))}
        </div>
      </div>
    </Overlay>
  )
}
