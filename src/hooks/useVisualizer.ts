import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store'
import { useMidi } from './useMidi'

export const useVisualizer = () => {
  const dispatch = useDispatch()
  const { setVisualizerNoteStateOn } = bindActionCreators(actionCreators, dispatch)
  const [noteNumber, isKeyDown] = useMidi()

  useEffect(() => {
    console.log(noteNumber)
    setVisualizerNoteStateOn(noteNumber)
  }, [noteNumber])
}
