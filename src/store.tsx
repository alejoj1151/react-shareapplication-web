import { createStore } from 'redux';

function reducer(state: any, action: any): any {
    if(action.type === "REMOVE_USER") {
        console.log("12345")
        return {
            ...state, 
            users: state.users.remove(action.user)
        }
    }
    return state;
}

export default createStore(reducer, {users: []});


