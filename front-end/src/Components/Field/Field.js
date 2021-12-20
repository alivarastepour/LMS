import { Wrapper } from "./Field.styles";

const Field = ({edit}) => {
    return <>
        <Wrapper>
            {
                edit ? <div>hello world</div> : <input type="text"/>
            }
        </Wrapper>
    </>
}
export default Field;