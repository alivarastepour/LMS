import useGet from "../../custom-hooks/useGet";
import { Wrapper, Button } from "./SchoolManagment.styles";

const SchoolManagment = () => {
    const URL = 'http://localhost:8000/study/school';
    const TOKEN = sessionStorage.getItem('token') ;

    const {data, error} = useGet(URL, TOKEN) ;

    // console.log(data);
    // console.log(error);

    return <>
        <Wrapper>
            {error ? <Button>
                <div>
                <span className="plus">+</span>
                <span>ایجاد مدرسه</span>
                </div>

                </Button> : <div>salam</div>}
        </Wrapper>
    </>
}   
export default SchoolManagment ;