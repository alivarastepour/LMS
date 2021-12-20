import { Wrapper } from "./Field.styles";

const Field = ({edit}) => {
    const t = true ;
    return <>
        <Wrapper className="wrapper">
            {
                edit ? <div className="content">علی وارسته پور</div> : <input spellCheck={false} placeholder="prev username" className="input" type="text"/>
            }
            {
                t ? 
                <i className="fa fa-pencil-square-o icon" aria-hidden="true"></i>
                :
                <i className="fa fa-check icon" aria-hidden="true"></i>
            }
        </Wrapper>
    </>
}
export default Field;