import { LayoutStateType } from '../../types'
import { LayoutActionType } from '../action-types'
import { LayoutAction } from '../actions'

const initialState: LayoutStateType = {
  mode: LayoutActionType.showAll,
  header: false,
  staff: false,
  visualizer: false,
  footer: false,
}

const reducer = (state: LayoutStateType = initialState, action: LayoutAction) => {
  switch (action.type) {
    case LayoutActionType.hideStaff: {
      return { ...initialState, mode: LayoutActionType.hideStaff, staff: action.payload }
    }
    case LayoutActionType.hideVisualizer: {
      return { ...initialState, mode: LayoutActionType.hideVisualizer, visualizer: action.payload }
    }
    case LayoutActionType.showAll: {
      return { ...initialState }
    }
    default: {
      return state
    }
  }
}

export default reducer
