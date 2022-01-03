import axios from 'axios'

export const schoolProfileEditHandler = (edit:boolean,setEdit:Function, info:{schoolName:string, schoolAddress:string}, url:string) => {
    const TOKEN = sessionStorage.getItem('token');
    if (edit) {
        axios.put(url,info, {
            headers:{'Authorization':`Token ${TOKEN}`}
        })
        .then(a => console.log(a)
        )
        .catch(e => console.log(e))
    }
    setEdit(!edit);
    
}