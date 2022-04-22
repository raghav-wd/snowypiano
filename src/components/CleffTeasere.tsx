import BassCleff from '../assets/notes/CleffTeaser/BassClef'
import TrebleClef from '../assets/notes/CleffTeaser/TrebleClef'

export const ClefTeaser = () => {
  return (
    <div className="flex items-center gap-x-10">
      <BassCleff />
      <TrebleClef />
    </div>
  )
}
