import { Wrapper } from "./Footer.styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="copyright">
          <div className="p-des">تمامی حقوق برای شرکت آتی‌گستر محفوظ است</div>
          <div className="e-des">
            Ati-Gostar 2022 All rights reserved &copy;
          </div>
        </div>

        <div className="github">
          <div>
            <IconButton>
              <a
                href="https://github.com/alivarastepour/LMS/issues/new"
                rel="noreferrer"
                target="_blank"
                className="a"
              >
                <GitHubIcon />
              </a>
            </IconButton>
          </div>
          <div className="e-des report">report issues on github</div>
        </div>
      </Wrapper>
    </>
  );
};
export default Footer;
