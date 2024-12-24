export const insert=(data)=>{
    return{
        type:"INSERT",
        payload:data
        
    }
}
export const deleteFun=(id)=>{
    return{
        type:"DELETE",
        payload:id
    }
}
export const update=()=>{
    return{
        type:"UPDATE",
        payload:{data,id}
    }

}