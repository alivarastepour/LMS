import { Wrapper } from "./CreateSchool.Button.styles"

const CreateSchoolButton = ({setShowCreateSchool}) => {
    return <>
        <Wrapper>
            <button className='button' onClick={() => setShowCreateSchool(true)}>
                <div>
                <span className="plus">+</span>
                <span>ایجاد مدرسه</span>
                </div>
            </button>
        </Wrapper>    
        </>
}
export default CreateSchoolButton ;