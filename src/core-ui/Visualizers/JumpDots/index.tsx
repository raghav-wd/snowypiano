import { useSelector } from 'react-redux'
import { State } from '../../../store'
import { Dot } from './Dot'

export const JumpDots = () => {
  const state = useSelector((state: State) => state.visualizerNotes)
  return (
    <>
      {[...Array(88)].map((_, i) => (
        <Dot key={i} index={i} />
      ))}
    </>
  )
}
