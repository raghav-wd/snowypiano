import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../store'
import { data } from '../assets/data/notesToRowCol'
import { useMidi } from './useMidi'
import { bindActionCreators } from 'redux'
import { v4 as uuidv4 } from 'uuid'

export const useCaret = () => {
  const noteState = useSelector((state: State) => state.randNotes)
  const caretNote = noteState![0]
  const dispatch = useDispatch()
  const { addNote, wrongNote, resetClass } = bindActionCreators(actionCreators, dispatch)

  const [notePressed, isKeyDown] = useMidi()

  useEffect(() => {
    if (caretNote) console.log(`Caret Note: ${getNote(caretNote.row)}`)
  }, [caretNote])

  useEffect(() => {
    if (isKeyDown && caretNote)
      if (getNote(caretNote.row).charAt(0) == notePressed.charAt(0))
        addNote([{ row: Math.round(Math.random() * 16), col: 13, uuid: uuidv4(), class: '' }])
      else {
        // toggles wiggle class on note
        wrongNote(noteState)
        setTimeout(() => {
          resetClass()
        }, 150)
      }
  }, [isKeyDown])
}

const getNote = (row: number) => data[row]
