import axios from "axios";
import{LOGIN_USER} from "./types";

export const loginUser = (dataToSubmit) =>{
    const req = axios.post('/login', dataToSubmit).then(res =>res.data);
    return{
        type:LOGIN_USER,
        payload: req
    }
}