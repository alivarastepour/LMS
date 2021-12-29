import {Wrapper} from "./CreateSchool.styles";

const CreateSchool = () => {
    return <>
        <Wrapper>
            <div className='label'>شناسه مدرسه</div>
            <div className='flex-item'>
                <input autoFocus={true} className='input left' type='text'/>
            </div>
            <div className='label'>نام مدرسه</div>
            <div className='flex-item'>
                <input className='input' type='text'/>
            </div>
            <div className='label'>آدرس</div>
            <div className='flex-item'>
                <input className='input address' type='text'/>
            </div>
            <div className='flex-item'>
                <button className='button'>ثبت درخواست</button>
            </div>
        </Wrapper>
    </>
}
export default CreateSchool;