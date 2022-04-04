import { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThemeTitles } from '../../assets/data/themes'
import { actionCreators, State } from '../../store'
import { Footer } from '../Footer'
import Staff from '../Staff'
import { JumpDots } from '../Visualizers/JumpDots'

type MainLayoutProps = {
  visualizerMode: boolean
  // focusMode: boolean,
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ visualizerMode }) => {
  const theme = useSelector((state: State) => state.root.theme)
  return (
    <div
      className="h-screen flex flex-col"
      style={{ backgroundColor: theme.footer.color, color: theme.primaryText }}>
      <div className="h-12 bg-slate-100 logo pl-4" style={{ backgroundColor: 'inherit' }}>
        SnowyPiano
      </div>
      <div className={visualizerMode ? 'h-4/6' : 'h-full'} style={{ backgroundColor: 'inherit' }}>
        <Staff />
      </div>
      <div
        className={visualizerMode ? 'h-2/6 flex justify-center items-end' : 'h-0'}
        style={{ backgroundColor: 'inherit' }}>
        <JumpDots />
      </div>
      <Footer />
    </div>
  )
}
