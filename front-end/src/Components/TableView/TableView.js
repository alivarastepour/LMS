import { useEffect, useState } from "react";

import AutoComplete from "../AutoComplete/AutoComplete";
import SearchBox from "../SearchBox/SearchBox";

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
                    <SearchBox
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    handleSearch={handleSearch}
                    staticInformation={staticInformation}
                    setInformation={setInformation}
                    searchTerm={searchTerm}
                    placeHolder='جستجو بر اساس نام, کد ملی ...'
                    />
                </td>
                <td 
                colSpan={2}>
                    <AutoComplete
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm} 
                    options={['کدملی','نام']}
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