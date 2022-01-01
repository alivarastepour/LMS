import { Table } from "./TableView.styles";
import {Autocomplete, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useState } from "react";
const obj = [ //example
    {no:1, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:2, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:3, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:4, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:5, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:6, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:7, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:8, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:9, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:10, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:11, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:12, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:13, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:14, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:15, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:16, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:17, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:18, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:19, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:20, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:21, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:22, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:23, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:24, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:25, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:26, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:27, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:28, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:29, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
    {no:30, name:'علی وارسته پور',id:1273672021, status:'پذیرفته شده'},
]
const TableView = () => {

    const [searchTerm, setSearchTerm] = useState('نام');
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
                        sx={{width:300,boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',background:'white'}}
                        label='جستجو'
                        placeholder='جستجو بر اساس نام, کدملی...'
                        type='text'/>
                </td>
                <td colSpan={2}>
                    <Autocomplete 
                    className='autocomplete'
                    size="small"
                    options={['نام','کدملی']}
                    renderInput={(p) => <TextField {...p} label='فیلتر'/>}
                    sx={{width:300,'boxShadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',background:'white'}}
                    onChange={(e,v) => {
                        setSearchTerm(v);
                    }}
                    value={searchTerm}
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
                obj.map(e => {
                    return <tr key={e.no}>
                        <td>{e.no}</td>
                        <td>{e.name}</td>
                        <td>{e.id}</td>
                        <td>{e.status}</td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    </>
}
export default TableView;