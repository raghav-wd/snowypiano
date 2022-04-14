import { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeTitles } from '../../assets/data/themes'
import { actionCreators, State } from '../../store'
import { Footer } from '../Footer'
import Staff from '../Staff'
import { Tracker } from '../Tracker'
import { JumpDots } from '../Visualizers/JumpDots'
import { useMainLayout } from './useMainLayout'

type MainLayoutProps = {
  visualizerMode: boolean
  // focusMode: boolean,
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ visualizerMode }) => {
  const theme = useSelector((state: State) => state.root.theme)
  // const appConfig = useSelector((state: State) => state.root.appConfig)
  const [hideHeader, hideStaff, hideVisualizer, hideFooter] = useMainLayout()

  const [staffCls, setStaffCls] = useState('h-4/6')
  const [visualizerCls, setVisualizerCls] = useState('h-2/6')
  const [headerCls, setHeaderCls] = useState('h-10')
  const [footerCls, setFooterCls] = useState('h-12')

  useEffect(() => {
    // determing sizing for teaser layout based on hidden properties
    if (hideStaff) {
      setStaffCls('hidden')
      setVisualizerCls('h-full')
    } else if (hideVisualizer) {
      setVisualizerCls('hidden')
      setStaffCls('h-full')
    } else if (hideFooter) {
      setFooterCls('hidden')
    } else if (hideHeader) {
      setStaffCls('h-5/6')
      setHeaderCls('hidden')
    }
  }, [hideHeader, hideStaff, hideVisualizer, hideFooter])

  return (
    <div
      className="h-screen flex flex-col main-layout"
      style={{ backgroundColor: theme.footer.color, color: theme.primaryText }}>
      <div className={`${headerCls} bg-slate-100 logo pl-4`} style={{ backgroundColor: 'inherit' }}>
        SnowyPiano
        <Tracker />
      </div>
      <div className={staffCls} style={{ backgroundColor: 'inherit' }}>
        <Staff />
      </div>
      <div
        className={visualizerCls + ' flex justify-center items-end'}
        style={{ backgroundColor: 'inherit' }}>
        <JumpDots />
      </div>
      <Footer height={footerCls} />
    </div>
  )
}
