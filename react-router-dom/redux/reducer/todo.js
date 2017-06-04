const todo = (state, action) =>{
  switch(action.type){
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if(state.id!=action.id){
        return state;
      }
      //把后面两个对象合并，放在前面{}对象里面
      return Object.assign({}, state, {
        completed=!state.completed;
      })
    default:
      return state

  }
}

const todos = (state,action) =>{
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,//以前的列表
        todo(undefined,action);//添加新一条
      ]
    case 'TOGGLE_TODO':
      return state.map(t=>{
        todo(t,action)
      })
      return state.map(
        function(t){
          todo(t,action)
        }
      )
    default:
      return state;
  }
}

export default todos;

//根据旧的action,  返回一个新的action
