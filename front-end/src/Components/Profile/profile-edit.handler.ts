import axios from 'axios'
import React from 'react';


export const profileEditHandler =
    (edit:boolean, setEdit: Function,
     state:{username:string, first_name:string, last_name:string, email:string, role:string, address:string}) => {

    const URL = 'http://localhost:8000/auth/whoami/';
    const TOKEN = sessionStorage.getItem('token');
    
    if (edit){
        axios.put(URL, state, {
            headers:{'Authorization':`Token ${TOKEN}`}
        }).catch(e => console.log(e));
    }
    setEdit(!edit);
}

export const profileImageEditHandler = (event:React.ChangeEvent<HTMLInputElement>, dispatch:Function) => {
    const URL = 'http://localhost:8000/auth/whoami/';
    const TOKEN = sessionStorage.getItem('token');

    // @ts-ignore
    const file = event.target.files[0];
    dispatch({type:'SET-PROFILE-PHOTO', payload:file});
    let formData = new FormData();
    formData.append('image', file, file.name);
    axios.post(URL, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization':`Token ${TOKEN}`
        }
      })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))
}