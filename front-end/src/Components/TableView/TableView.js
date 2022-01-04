import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import {Autocomplete, InputAdornment, TextField} from "@mui/material";

import { Table } from "./TableView.styles";

import useGet from "../../custom-hooks/useGet";
import {handleSearch} from "./TableView.handlers";

const TableView = ({content}) => {

    const URL = `http://localhost:8000/study/${content}-list/` ;
    const TOKEN = sessionStorage.getItem('token');

    const {data} = useGet(URL,TOKEN);
    
    const [information, setInformation] = useState(data.requests);

    const [staticInformation, setStaticInformation] = useState(data.requests);

    const [searchTerm, setSearchTerm] = useState('نام');

    const [searchValue, setSearchValue] = useState('');



    useEffect(() => {
        setInformation(data.requests);
        setStaticInformation(data.requests)
    },[data]);

    return <>
        <Table>
            <tbody>
            <tr>
                <td 
                colSpan={2} 
                className="input-container">
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        size="small"
                        sx={{width:300,boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',background:'#F8F8F8'}}
                        label='جستجو'
                        placeholder='جستجو بر اساس نام, کدملی...'
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                            handleSearch(e,staticInformation, setInformation, searchTerm);
                        }}
                        type='text'/>
                </td>
                <td 
                colSpan={2}>
                    <Autocomplete 
                    className='autocomplete'
                    size="small"
                    options={['نام','کدملی']}
                    renderInput={(p) => <TextField {...p} label='فیلتر'/>}
                    sx={{width:300,'boxShadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',background:'#F8F8F8'}}
                    onChange={(e,v) => {
                        setSearchTerm(v);
                    }}
                    value={searchTerm}
                    defaultValue='نام'
                    />
                </td>
            </tr>
            <tr>
                <td className="header">ردیف</td>
                <td className="header">نام</td>
                <td className="header">کدملی</td>
                <td className="header">وضعیت</td>
            </tr>

            {
                information && information.length !== 0  ? information.map((element) => {
                    return <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.username}</td>
                        <td>{element.status}</td>
                    </tr>
            }) 
            : 
                    <tr>
                        <td colSpan={4} className='no-result'>
                            موردی یافت نشد
                        </td>
                    </tr>
            }
            </tbody>
        </Table>
    </>
}

export default TableView;