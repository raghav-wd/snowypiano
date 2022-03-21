import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import { MainLayout } from '../core-ui/Layout/MainLayout'
import { actionCreators, State } from '../store'

function App() {
  const dispatch = useDispatch()
  const { changeTheme } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    // changeTheme('blue')
  }, [])

  return (
    <>
      <MainLayout visualizerMode={true} />
    </>
  )
}

export default App
