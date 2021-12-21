import { Wrapper } from "./Field.styles";

const Field = ({edit, content}) => {
    return <>
        <Wrapper className="wrapper">
            {
                edit ? <div className="content">{content}</div> : <input spellCheck={false} placeholder="prev username" className="input" type="text"/>
            }
        </Wrapper>
    </>
}
export default Field;