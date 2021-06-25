export const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_SCHEDULE':
      return {
        ...state,
          schedules: state.schedules.concat({
          title: action.payload.title,
          teacher: action.payload.teacher,
          batch: action.payload.batch,
          time: action.payload.time,
          details: action.payload.details
        }),
      }
      case 'SET_SCHEDULE' : 
      return {
        ...state, 
        schedules : state.schedules.concat(action.payload)
      }
    default:
      return state
  }
}
