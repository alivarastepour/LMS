import { Wrapper } from "./StudentClasses.Header.styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const StudentClassesHeader = ({ state, setState, classes }) => {
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
                value={state}
                onChange={(e) => setState(e.target.value)}
                sx={{ width: 400 }}
                labelId="select"
                id="select"
                label="یک مدرسه را انتخاب کنید"
              >
                {classes &&
                  classes.map((e) => (
                    <MenuItem
                      value={e.school_id}
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
