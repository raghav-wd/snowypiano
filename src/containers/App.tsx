import '../App.css'
import { Window } from '../components/Window'
import { MainLayout } from '../core-ui/Layout/MainLayout'

function App() {
  return (
    <>
      <MainLayout visualizerMode={true} />
      <Window />
    </>
  )
}

export default App
