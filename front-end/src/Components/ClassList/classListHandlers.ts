import {ChangeEvent} from "react";

export const handleSearch = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, obj:{name:string, teacher:string}[], setData:Function, searchTerm:string):void => {

    const value:string = e.target.value;

    if (value.trim() === ''){
        setData(obj);
        return;
    }
    let newObj ;
    if (searchTerm === 'نام کلاس'){
        newObj = obj.filter(a => {
            return a.name.startsWith(value);
        })
    }else{
            newObj = obj.filter(a => {
                return a.teacher.startsWith(value);
            })
        
    }
    setData(newObj);
}