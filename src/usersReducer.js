const userInitial={
    users:[],
    posts:[]
}

export const usersReducer=(state=userInitial,action)=>{
    switch(action.type){
        case 'GET_DATA':{
            return {
                users:[...action.payload.users],
                posts:[...action.payload.posts]
            }
        }
        default:{
            return {...state}
        }
    }
}