import { FunctionComponent, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../store'
import { ThemeList } from './ThemeList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBrush,
  faCode,
  faGear,
  faCodeBranch,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Settings } from './Settings'
import { MIDI } from './MIDI'

type FooterProps = {
  height: string
}

export const Footer: FunctionComponent<FooterProps> = ({ height }) => {
  const [showThemeList, setShowThemeList] = useState(false)
  const [showMIDI, setShowMIDI] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const footerState = useSelector((state: State) => state.root.theme.footer)

  return (
    <div
      className={`${height} flex flex-row-reverse items-center justify-center px-4`}
      style={{ backgroundColor: footerState.color }}>
      <div className="options border-l-2 border-slate-400 flex flex-row-reverse px-4">
        <div>
          <a
            className="px-3 link link--1 font-bold cursor-pointer"
            onClick={() => {
              if (!showThemeList) setShowMIDI(true)
            }}>
            MIDI
          </a>
        </div>
        <div>
          <a
            className="px-3 link link--1 cursor-pointer"
            onClick={() => {
              if (!showThemeList) setShowThemeList(true)
            }}>
            <FontAwesomeIcon icon={faBrush} />
          </a>
        </div>
        <div>
          <a
            className="px-3 link link--1 cursor-pointer"
            onClick={() => {
              if (!showSettings) setShowSettings(true)
            }}>
            <FontAwesomeIcon icon={faGear} />
          </a>
        </div>
      </div>
      <div className="site  flex flex-row-reverse px-4">
        <div>
          <a href="https://github.com/raghav-wd/snowypiano" className="px-3 link link--1">
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
        <div>
          <a href="mailto:raghav@snowypiano.com" className="px-3 link link--1">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="info px-4 border-r-2 border-slate-400">
        <div className="font-bold cursor-default">
          <FontAwesomeIcon icon={faCodeBranch} />
          <span className="px-2">Unreleased</span>
        </div>
      </div>
      {showThemeList ? <ThemeList visibility={setShowThemeList} /> : ''}
      {showSettings ? <Settings visibility={setShowSettings} /> : ''}
      {showMIDI ? <MIDI visibility={setShowMIDI} /> : ''}
    </div>
  )
}
