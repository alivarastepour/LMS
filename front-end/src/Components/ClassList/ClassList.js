import { Wrapper } from "./ClassList.styles";
import SearchBox from "../SearchBox/SearchBox";
import AutoComplete from "../AutoComplete/AutoComplete";
import useGet from "../../custom-hooks/useGet";
import { handleSearch, addClass } from "./classListHandlers";
import { useEffect, useState } from "react";
const CreateClass = () => {

    const URL = 'http://localhost:8000/study/class';
    const TOKEN = sessionStorage.getItem('token') ; 

    const {data} = useGet(URL, TOKEN);

    const [info, setInfo] = useState([]);

    const [staticInfo, setStaticInfo] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [searchTerm, setSearchTerm] = useState('نام کلاس');

    const [className, setClassName] = useState('');

    useEffect(() => {
        setStaticInfo(data.classes);
        setInfo(data.classes);
    },[data])

    return <>
        <Wrapper>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={1}>
                                <SearchBox
                                className='s-box'
                                placeHolder='جستجو بر اساس نام کلاس , ارائه دهنده ...'
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                handleSearch={handleSearch}
                                staticInformation={staticInfo}
                                setInformation={setInfo}
                                searchTerm={searchTerm}
                                />
                            </td>
                            <td colSpan={1}>
                                <AutoComplete
                                options={['ارائه دهنده','نام کلاس']}
                                setSearchTerm={setSearchTerm}
                                searchTerm={searchTerm}
                                />
                            </td>
                            <td colSpan={1}>
                                <input
                                placeholder="برای افزودن کلاس نام کلاس را وارد کنید."
                                id="input" 
                                className="input" 
                                type='text'
                                value={className}
                                onChange={e => setClassName(e.target.value)}
                                />
                            </td>
                            <td style={{textAlign:'right', paddingRight:100}}>
                                <button
                                className="button"
                                onClick={() => {addClass(className)}}
                                >افزودن</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="header">ردیف</td>
                            <td className="header">نام کلاس</td>
                            <td colSpan={2} className="header">ارائه دهنده</td>
                        </tr>
                    {
                        info && info.map((e) => {
                            return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td colSpan={2}>{e.teacher || 'مشخص نشده'}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
        </Wrapper>
    </>
}

export default CreateClass;