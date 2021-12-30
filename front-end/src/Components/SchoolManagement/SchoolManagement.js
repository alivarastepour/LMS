import {lazy, useState} from "react";

import { Wrapper } from "./SchoolManagement.styles";

import useGet from "../../custom-hooks/useGet";

const CreateSchool = lazy(() => import('../CreateSchool/CreateSchool'));
const CreateSchoolButton = lazy(() => import('../CreateSchool.Button/CreateSchool.Button'));

const SchoolManagement = () => {
    const URL = 'http://localhost:8000/study/school';
    const TOKEN = sessionStorage.getItem('token') ;

    const [showCreateSchool, setShowCreateSchool] = useState(false);

    const {data, error} = useGet(URL, TOKEN) ;

    return <>
        <Wrapper>
            {
            false ? <CreateSchool/> :
            false ? <CreateSchoolButton setShowCreateSchool={setShowCreateSchool}/> : 
            <div>salam</div>}
        </Wrapper>
    </>
}   
export default SchoolManagement ;