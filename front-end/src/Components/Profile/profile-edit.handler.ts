import axios from 'axios'
const URL = 'http://localhost:8000/auth/whoami/';
const TOKEN = sessionStorage.getItem('token');
export const profileEditHandler = (edit:boolean, setEdit: Function, state:object) => {
    console.log(state)
    if (edit){
        axios.put(URL, state, {
            headers:{'Authorization':`Token ${TOKEN}`}
        }).then(a => console.log(a.status)).catch(e => console.log(e));
    }
    setEdit(!edit);

}