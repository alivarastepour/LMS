import { Wrapper } from "./Field.styles";

const Field = ({edit, content, editable}) => {
    return <>
        <Wrapper className="wrapper">
            {
                edit && editable ? <input spellCheck={false} placeholder={content} className="input" type="text"/>
                    :
                        <div className="content">{content}</div>
            }
        </Wrapper>
    </>
}
export default Field;