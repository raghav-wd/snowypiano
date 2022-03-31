import { useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../store'
import { ThemeList } from './ThemeList'

export const Footer = () => {
  const [showThemeList, setShowThemeList] = useState(false)
  const footerState = useSelector((state: State) => state.root.theme.footer)

  return (
    <div className="h-8 flex flex-row-reverse px-4" style={{ backgroundColor: footerState.color }}>
      <span
        onClick={() => {
          if (!showThemeList) setShowThemeList(true)
        }}>
        Themes
      </span>
      {showThemeList ? <ThemeList visibility={setShowThemeList} /> : ''}
    </div>
  )
}
