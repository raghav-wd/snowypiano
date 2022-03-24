export const useRandomNotes = () => {
    const randomNote = (col: number) => {
        const row = Math.round(Math.random() * 16)
        return {row, col}
    }
    const notesArray = []
    for(let i = 1; i<=12; i+=1) {
        const note = randomNote(i)
        notesArray.push(note)
    }
    return notesArray
}