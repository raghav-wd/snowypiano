import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { KeyToNoteNumber } from '../assets/data/keyToNoteNumber'
import { actionCreators } from '../store'

export const useKeyboard = () => {
  const dispatch = useDispatch()
  const { addNote, setVisualizerNoteStateOn, setVisualizerNoteStateOff } = bindActionCreators(
    actionCreators,
    dispatch,
  )

  useEffect(() => {
    // listening to document key inputs
    document.addEventListener('keydown', (e: KeyboardEvent) =>
      setVisualizerNoteStateOn(getNoteNumber(e.key)),
    )
    document.addEventListener('keyup', (e: KeyboardEvent) =>
      setVisualizerNoteStateOff(getNoteNumber(e.key)),
    )
  }, [])
}

const getNoteNumber = (note: string) => {
  note = note.toUpperCase()
  const res = KeyToNoteNumber.find((i) => {
    if (i.key == note) return i
  })
  if (res?.key) return res.noteNumber
  else return -1
}
