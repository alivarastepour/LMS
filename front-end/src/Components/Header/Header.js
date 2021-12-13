import { Wrapper } from "./Header.styles";

const Header = () => {
    return <>
        <Wrapper>
            <div><button className="btn">ورود</button></div>
            <div><button className="btn">ثبت نام</button></div>
        </Wrapper>
    </>
}

export default Header;