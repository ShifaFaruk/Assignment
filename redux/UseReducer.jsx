const initai_state={
    data:[]
}
const UseReducer = (state=initai_state,action) => {
    if(action.type==="INSERT"){
        return{
            ...state,
            data:[...state.data,action.payload]
        }
    }else if(action.type==="DELETE"){
        return{
            ...state,
            data:state.data.filter((i,index)=>{
                return index!==action.payload
            })
        }
    }else if(action.type==="UPDATE"){
        return{
        ...state,
        data:state.data.map((i,index)=>{
         if(index===action.payload.id){
            
            i.name=action.payload.data.name,
            i.age=action.payload.data.age
            }
            return i;
        })
        }
    }
  return state
}

export default UseReducer
