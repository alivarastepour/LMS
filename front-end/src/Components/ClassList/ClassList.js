import { Wrapper } from "./ClassList.styles";
import SearchBox from "../SearchBox/SearchBox";
import AutoComplete from "../AutoComplete/AutoComplete";
import useGet from "../../custom-hooks/useGet";
import { handleSearch, addClass } from "./classListHandlers";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';



import { useEffect, useState } from "react";

const fakeData = [
    {id:'0', name:'سلام', teacher:'اون'},
    {id:'1', name:'ممد', teacher:'این'},
    {id:'2', name:'هوی', teacher:'اونا'},
    {id:'3', name:'میز', teacher:'همونا'},
    {id:'4', name:'صندلی', teacher:'همون'},
    {id:'5', name:'موز', teacher:'ندارد'},
    {id:'6', name:'فا', teacher:'سیکو'},
    {id:'7', name:'فی', teacher:''},
    {id:'8', name:'فو', teacher:''},
    {id:'9', name:'فیس', teacher:''},
    {id:'10', name:'هیس', teacher:''},
]


const CreateClass = () => {

    const URL = 'http://localhost:8000/study/class';
    const TOKEN = sessionStorage.getItem('token') ; 

    const {data} = useGet(URL, TOKEN);

    const [info, setInfo] = useState([]);

    const [staticInfo, setStaticInfo] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [searchTerm, setSearchTerm] = useState('نام کلاس');

    const [className, setClassName] = useState('');

    const [openSetting, setOpenSetting] = useState(false);

    useEffect(() => {
        setStaticInfo(data.classes);
        setInfo(data.classes);
    },[data])

    return <>
        <Wrapper>
                <table className="table">
                    <tbody>
                        <tr className="no-hover">
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
                        <tr className="no-hover">
                            <td className="header">ردیف</td>
                            <td className="header">نام کلاس</td>
                            <td className="header">ارائه دهنده</td>
                            <td className="header">وضعیت</td>
                        </tr>
                    {
                        fakeData.map((e) => {
                            return <tr className="hover" key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td colSpan={1}>{e.teacher || 'مشخص نشده'}</td>
                                <td>
                                    <button>حذف</button>
                                    <button onClick={() => setOpenSetting(true)}>تنظیمات کلاس</button>
                                <Dialog
                                sx={{}}
                                className='a'
                                open={openSetting}
                                onClose={() => setOpenSetting(false)}
                                >
                                    <DialogTitle
                                    sx={{textAlign:'right', fontFamily:'vazir'}}
                                    >تنظیمات</DialogTitle>
                                </Dialog>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
        </Wrapper>
    </>
}

export default CreateClass;