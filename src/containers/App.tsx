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
    // changeTheme({
    //   notation: '#fff',
    //   line: '#789395',
    //   clef: '#B4CFB0',
    //   ledger: {
    //     color: 'blue',
    //     length: 64,
    //     thickness: 4,
    //   },
    // })
  }, [])

  return (
    <>
      <MainLayout visualizerMode={true} />
    </>
  )
}

export default App
