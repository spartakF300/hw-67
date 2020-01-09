const initialState ={
    str:'',
    locked:false
};
const password = '1234';
const reducer =(state = initialState,action) =>{
    if(action.type === 'CHECK' && state.str === password){
        return {
            ...state,
            locked:true
        }

    }
    if(action.type === 'REMOVE'){
        return {
            ...state,
            str: state.str.substr(0,state.str.length-1)
        }
    }
if (action.type === 'ADD_NUMBER' && state.str.length < 4){
    return{
        ...state,
        str: state.str + action.number
    }
}else {
    return state
}
};
export default reducer