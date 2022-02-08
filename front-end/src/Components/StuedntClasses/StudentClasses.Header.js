import { Wrapper } from "./StudentClasses.Header.styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const StudentClassesHeader = ({ state, setState, schools }) => {
  return (
    <>
      <Wrapper>
        <div className="list-title">
          <div>لیست کلاس ها</div>
          <div>
            <FormControl>
              <InputLabel
                sx={{
                  fontFamily: "vazir",
                  fontSize: "1.1rem",
                }}
                id="select"
              >
                یک مدرسه را انتخاب کنید
              </InputLabel>
              <Select
                value={state ? state : {}}
                sx={{ width: 400 }}
                labelId="select"
                id="select"
                label="یک مدرسه را انتخاب کنید"
              >
                {schools.length !== 0 &&
                  schools.length &&
                  schools.map((e) => (
                    <MenuItem
                      value={e}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      key={e.school_id}
                      sx={{
                        textAlign: "right",
                        direction: "rtl",
                        fontFamily: "vazir",
                      }}
                    >
                      <div className="select-item">{e.name}</div>
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default StudentClassesHeader;
