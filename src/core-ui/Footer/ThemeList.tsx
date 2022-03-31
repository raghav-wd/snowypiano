// export const ThemeList = () => {
//   return (
//     <div className="fixed top-0 left-0 right-0 bg-slate-700 h-screen w-screen opacity-50">
//       <div className="relative py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
//         <div className=" px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10 h-3/6">
//           h
//         </div>
//       </div>
//     </div>
//   )
// }

import { themes, ThemeTitles } from '../../assets/data/themes'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../store'
import { useEffect } from 'react'

export const ThemeList = (props: any) => {
  const dispatch = useDispatch()
  const { changeTheme } = bindActionCreators(actionCreators, dispatch)
  const theme = useSelector((state: State) => state.root.theme)

  return (
    <div
      className="fixed top-0 left-0 right-0 h-screen w-screen flex flex-col justify-center"
      style={{ backgroundColor: '#21212199' }}
      onClick={(e) => {
        e.target !== e.currentTarget ? '' : props.visibility(false)
      }}>
      <div
        className="relative ring-gray-900/5 mx-auto w-3/6 h-4/6 rounded-md px-4 py-2 pb-12"
        style={{ backgroundColor: theme.secondary }}>
        <p className="text-center mb-2" style={{ color: theme.secondaryText }}>
          Themes
        </p>
        <div className="overflow-auto h-full">
          {themes.map((i) => (
            <div
              className="mb-1 p-2"
              key={uuidv4()}
              onClick={() => changeTheme(i.title)}
              style={{ color: theme.secondaryText }}>
              {i.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
