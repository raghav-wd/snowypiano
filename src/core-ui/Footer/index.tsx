import { useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../store'
import { ThemeList } from './ThemeList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faCode, faGear } from '@fortawesome/free-solid-svg-icons'
import { Settings } from './Settings'

export const Footer = () => {
  const [showThemeList, setShowThemeList] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const footerState = useSelector((state: State) => state.root.theme.footer)

  return (
    <div className="h-8 flex flex-row-reverse px-4" style={{ backgroundColor: footerState.color }}>
      <span
        className="px-2"
        onClick={() => {
          if (!showThemeList) setShowThemeList(true)
        }}>
        <FontAwesomeIcon icon={faBrush} />
      </span>
      <a href="https://github.com/raghav-wd/snowypiano" className="px-2">
        <FontAwesomeIcon icon={faCode} />
      </a>
      <span
        className="px-2"
        onClick={() => {
          if (!showSettings) setShowSettings(true)
        }}>
        <FontAwesomeIcon icon={faGear} />
      </span>
      {showThemeList ? <ThemeList visibility={setShowThemeList} /> : ''}
      {showSettings ? <Settings visibility={setShowSettings} /> : ''}
    </div>
  )
}
