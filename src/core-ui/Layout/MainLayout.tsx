import { FunctionComponent } from 'react'
import Cleff from '../Cleff'

type MainLayoutProps = {
  visualizerMode: boolean
  // focusMode: boolean,
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ visualizerMode }) => (
  <div className="h-screen flex flex-col">
    <div className="h-12 bg-slate-100">Head Area</div>
    <div className={(visualizerMode ? 'h-4/6' : 'h-full') + ' bg-slate-200'}>
      Clef Area
      <Cleff />
    </div>
    <div className={(visualizerMode ? 'h-2/6' : 'h-0') + ' bg-slate-300'}>Visualizer Area</div>
    <div className="h-8 bg-slate-100">Footer Area</div>
  </div>
)
