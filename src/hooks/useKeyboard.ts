import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../store"
import { useMidi } from "./useMidi"

export const useKeyboard = () => {
    const dispatch = useDispatch()
    const { addNote, setVisualizerNoteStateOn, setVisualizerNoteStateOff } = bindActionCreators(actionCreators, dispatch)
    // const [setNoteNumber] = useMidi()

    useEffect(() => {
        type KeyToNoteNumber = {
            key: string
            noteNumber: number
        }
        const KeyToNoteNumber: KeyToNoteNumber[] = [
            {key: "A", noteNumber: 37},
            {key: "B", noteNumber: 39},
            {key: "C", noteNumber: 40},
            {key: "D", noteNumber: 42},
            {key: "E", noteNumber: 44},
            {key: "F", noteNumber: 45},
            {key: "G", noteNumber: 47},
        ]
        const getNoteNumber = (note: string) => {
            const res = KeyToNoteNumber.find(i => {
                if(i.key == note.toUpperCase())
                    return i
            })
            if(res?.key)return res.noteNumber
            else return -1
        }
        document.addEventListener('keydown', (e: KeyboardEvent) => setVisualizerNoteStateOn(getNoteNumber(e.key)))
        document.addEventListener('keyup', (e: KeyboardEvent) => setVisualizerNoteStateOff(getNoteNumber(e.key)))
    }, [])
}