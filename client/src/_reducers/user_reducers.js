import {LOGIN_USER} from "../_actions/types";

export default function(state={},action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload} //...state: 빈공간 그대로 나옴
        default:
            return state;
    }
}