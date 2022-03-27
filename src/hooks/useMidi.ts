import { useEffect, useState } from "react"
import { MidiConnectionEvent, MidiMessageData, NotePressedState } from "../types/midi"
import { v4 as uuidv4 } from 'uuid'
import { data } from '../assets/data/midiNoteToNote'

export const useMidi = () => {
    const [notePressed, setNotePressed] = useState('')
    const [notePressedUuid, setNotePressedUuid] = useState(uuidv4())
    useEffect(() => {

        const onMIDISuccess = (midiAccess: any) => {
            const midi = midiAccess
            console.log("MIDI ready to use!")
            midi.onstatechange = midiInputListener

            const midiInputs = midi.inputs
            midiInputs.forEach((input: any) => {
                input.onmidimessage = handleInput
            })
        }

        const handleInput = (e: any) => {
            const midiMessage: MidiMessageData = {
                command: e.data[0],
                note: e.data[1],
                velocity: e.data[2],
            }
            switch(midiMessage.command) {
                case 144:
                    if(midiMessage.velocity > 0)
                        noteOn(midiMessage.note, midiMessage.velocity)
                    else
                        noteOff(midiMessage.note)
                    break
                case 128:
                    noteOff(midiMessage.note)
                    break
            }
        }

        const noteOn = (note: number, velocity: number) => {
            // console.log(note, velocity)
            // console.log(midiNoteToNote(note))
            setNotePressedUuid(uuidv4())
            // console.log('he')
            setNotePressed(midiNoteToNote(note))
        }

        const noteOff = (note: number) => {
            // 
        }

        const onMIDIFailure = (message: any) => {
            console.log("Failed to get MIDI access - ", message)
        }

        // listen to changes on midi input/output
        const midiInputListener = (e: any) => {
            const midiConnection: MidiConnectionEvent = {
                name: e.port.name,
                manufacturer: e.port.manufacturer,
                type: e.port.type,
                connection: e.port.connection,
                state: e.port.state
            }
            // console.log(midiConnection)
        }

        const midiNoteToNote = (note: number) => {
            return Object.keys(data).filter(key => data[key] === note)[0]
        }


        // Establishing midi connection
        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure)
    }, [])
    return [notePressed, notePressedUuid]
}