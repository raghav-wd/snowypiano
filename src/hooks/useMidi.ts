import { MidiConnectionEvent } from "../types/midi"

export const useMidi = () => {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure)
}

const onMIDISuccess = (midiAccess: any) => {
    const midi = midiAccess
    console.log("MIDI ready!")
    midi.onstatechange = midiInputListener

    const midiInputs = midi.inputs
    const inputs = midiAccess.inputs.values()
    inputs.next().value.onmidimessage = handleInput
    // for(let input = inputs.next(); input && !input.done; input = inputs.next()) {
    //     input.value.onmidimessage = handleInput
    // }
}

const handleInput = (e: any) => {
    console.log(e)
}

const onMIDIFailure = (message: any) => {
    console.log("Failed to get MIDI access - ", message)
}

const midiInputListener = (e: any) => {
    const midiConnection: MidiConnectionEvent = {
        name: e.port.name,
        manufacturer: e.port.manufacturer,
        type: e.port.type,
        connection: e.port.connection,
        state: e.port.state
    }
    console.log(midiConnection)
}