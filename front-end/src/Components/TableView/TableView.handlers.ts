import {ChangeEvent} from "react";

export const handleSearch = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, obj:{no:number, id:string, name:string, status:string}[], setData:Function, searchTerm:string) => {
    const value:string = e.target.value;
    if (value.trim() === ''){
        setData(obj);
        return;
    }
    let newObj ;
    if (searchTerm === 'نام'){
        newObj = obj.filter(a => {
            return a.name.startsWith(value);
        })
    }else{
        newObj = obj.filter(a => {
            return a.id.startsWith(value);
        })
    }
    setData(newObj);
}