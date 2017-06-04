const visibilityFilter = (state="SHOW_ALL", action) =>{
  switch(action.type){
    case 'setVisibility':
      return action.visibilityFilter
    default:
      return state
  }
}
