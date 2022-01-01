import { useState } from "react";

import {Autocomplete, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { Table } from "./TableView.styles";

import {handleSearch} from "./TableView.handlers";

const TableView = () => {
    const obj = [ //example
        {no:1, name:'علی وارسته پور',id:'1273672021', status:'پذیرفته شده'},
        {no:2, name:'رضا تخنی',id:'2343435', status:'پذیرفته شده'},
        {no:3, name:'ییبسون',id:'67866', status:'پذیرفته شده'},
        {no:4, name:'اذر',id:'5345345', status:'پذیرفته شده'},
    ]

    const [searchTerm, setSearchTerm] = useState('نام');

    const [searchValue, setSearchValue] = useState('');

    const [data, setData] = useState(obj);

    return <>
        <Table>
            <tbody>
            <tr>
                <td colSpan={2} className="input-container">
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
                            handleSearch(e,obj, setData, searchTerm);
                        }
                        }
                        type='text'/>
                </td>
                <td colSpan={2}>
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
                data && data.length !== 0 ? data.map(e => {
                    return <tr key={e.no}>
                        <td>{e.no}</td>
                        <td>{e.name}</td>
                        <td>{e.id}</td>
                        <td>{e.status}</td>
                    </tr>
                }) :
                    <td colSpan={4} className='no-result'>موردی یافت نشد</td>
            }
            </tbody>
        </Table>
    </>
}
export default TableView;