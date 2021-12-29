import {lazy, useState} from "react";

import { Wrapper } from "./SchoolManagement.styles";

import useGet from "../../custom-hooks/useGet";

const CreateSchool = lazy(() => import('../CreateSchool/CreateSchool'));

const SchoolManagement = () => {
    const URL = 'http://localhost:8000/study/school';
    const TOKEN = sessionStorage.getItem('token') ;

    const [showCreateSchool, setShowCreateSchool] = useState(false);

    const {data, error} = useGet(URL, TOKEN) ;

    // console.log(data);
    // console.log(error);

    return <>
        <Wrapper>
            {showCreateSchool ? <CreateSchool/> :
            error ? <button className='button' onClick={() => setShowCreateSchool(true)}>
                <div>
                <span className="plus">+</span>
                <span>ایجاد مدرسه</span>
                </div>

                </button> : <div>salam</div>}
        </Wrapper>
    </>
}   
export default SchoolManagement ;