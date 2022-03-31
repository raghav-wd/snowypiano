import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import { ThemeTitles } from '../assets/data/themes'
import { MainLayout } from '../core-ui/Layout/MainLayout'
import { actionCreators, State } from '../store'

function App() {
  // const dispatch = useDispatch()
  // const { changeTheme } = bindActionCreators(actionCreators, dispatch)
  // const root = useSelector((state: State) => state.root)

  // useEffect(() => {
  //   changeTheme(root, ThemeTitles.Dark)
  // }, [])
  return (
    <>
      <MainLayout visualizerMode={true} />
    </>
  )
}

export default App
