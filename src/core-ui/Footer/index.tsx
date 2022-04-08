import { useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../store'
import { ThemeList } from './ThemeList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faCode, faGear } from '@fortawesome/free-solid-svg-icons'
import { Settings } from './Settings'
import { MIDI } from './MIDI'

export const Footer = () => {
  const [showThemeList, setShowThemeList] = useState(false)
  const [showMIDI, setShowMIDI] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const footerState = useSelector((state: State) => state.root.theme.footer)

  return (
    <div
      className="h-10 flex flex-row-reverse items-center px-4"
      style={{ backgroundColor: footerState.color }}>
      <div>
        <a
          className="px-3 link link--1 font-bold"
          onClick={() => {
            if (!showThemeList) setShowMIDI(true)
          }}>
          MIDI
        </a>
      </div>
      <div>
        <a
          className="px-3 link link--1"
          onClick={() => {
            if (!showThemeList) setShowThemeList(true)
          }}>
          <FontAwesomeIcon icon={faBrush} />
        </a>
      </div>
      <div>
        <a
          className="px-3 link link--1"
          onClick={() => {
            if (!showSettings) setShowSettings(true)
          }}>
          <FontAwesomeIcon icon={faGear} />
        </a>
      </div>
      <div>
        <a href="https://github.com/raghav-wd/snowypiano" className="px-3 link link--1">
          <FontAwesomeIcon icon={faCode} />
        </a>
      </div>
      {showThemeList ? <ThemeList visibility={setShowThemeList} /> : ''}
      {showSettings ? <Settings visibility={setShowSettings} /> : ''}
      {showMIDI ? <MIDI visibility={setShowMIDI} /> : ''}
    </div>
  )
}
