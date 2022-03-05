import { useNavigate } from "react-router-dom";

import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { Wrapper } from "./NotFound.styles";

import four_oh_four from "../../Assets/404.png";

const NotFound = () => {
  const navigator = useNavigate();
  const nav = () => navigator("/");

  return (
    <>
      <Wrapper>
        <div>
          <h1 className="header">صفحه مورد نظر پیدا نشد.</h1>
        </div>
        <div className="home">
          <h4>بازگشت به صفحه اصلی</h4>
          <div className="icon">
            <IconButton
              onClick={() => {
                nav();
              }}
            >
              <HomeIcon />
            </IconButton>
          </div>
        </div>
        <div className="image">
          <img src={four_oh_four} alt="404" className="img" />
        </div>
      </Wrapper>
    </>
  );
};

export default NotFound;
