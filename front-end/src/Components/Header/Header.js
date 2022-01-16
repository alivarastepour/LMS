import { Wrapper } from "./Header.styles";

const Header = ({ login, setLogin }) => {
  return (
    <>
      <Wrapper>
        <div>
          <button
            onClick={() => setLogin(true)}
            className={`btn ${login ? "active" : "not-active"}`}
          >
            ورود
          </button>
        </div>
        <div>
          <button
            onClick={() => setLogin(false)}
            className={`btn ${login ? "not-active" : "active"}`}
          >
            ثبت نام
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
