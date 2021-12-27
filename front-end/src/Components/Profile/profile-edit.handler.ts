import axios from 'axios'
import React from 'react';

export const profileEditHandler =
    (edit:boolean, setEdit: Function,
     state:{username:string, first_name:string, last_name:string, email:string, role:string, address:string, image:string}) => {

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
    const url = 'http://localhost:8000/auth/whoami/';
    const TOKEN = sessionStorage.getItem('token');
    // @ts-ignore
    const temp = URL.createObjectURL(event.target.files[0]);
    // @ts-ignore
    const file = event.target.files[0];
    let formData = new FormData();
    formData.append('image', file, file.name);
    axios.post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization':`Token ${TOKEN}`
        }
      })
          .then((res) => {    
            dispatch({type:'SET-PROFILE-PHOTO', payload:temp});
          })
          .catch((e) => {
            console.log(e);
          });
}