import { Wrapper } from "./ClassList.styles";
import SearchBox from "../SearchBox/SearchBox";
import AutoComplete from "../AutoComplete/AutoComplete";
import useGet from "../../custom-hooks/useGet";
import { useEffect, useState } from "react";
const CreateClass = () => {

    const URL = 'http://localhost:8000/study/class';
    const TOKEN = sessionStorage.getItem('token') ; 
    const {data} = useGet(URL, TOKEN);

    const [info, setInfo] = useState([]);
    const [staticInfo, setStaticInfo] = useState([]);

    useEffect(() => {
        setStaticInfo(data.classes);
        setInfo(data.classes);
    },[data])


    return <>
        <Wrapper>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <SearchBox
                                className='s-box'
                                placeHolder='جستجو بر اساس نام کلاس , ارائه دهنده ...'
                                />
                            </td>
                            <td colSpan={1}>
                                <AutoComplete
                                options={['ارائه دهنده','نام کلاس']}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input placeholder="برای افزودن کلاس نام کلاس را وارد کنید." id="input" className="input" type='text'/>
                            </td>
                            <td style={{textAlign:'right', paddingRight:100}}>
                                <button className="button">افزودن</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="header">ردیف</td>
                            <td className="header">نام کلاس</td>
                            <td className="header">ارائه دهنده</td>
                        </tr>
                    {
                        info && info.map((e) => {
                            return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.teacher || 'مشخص نشده'}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
        </Wrapper>
    </>
}

export default CreateClass;