export type MidiConnectionEvent = {
    name: string
    manufacturer: string
    type: 'input' | 'output'
    connection: string
    state: 'connected' | 'disconnected'
}