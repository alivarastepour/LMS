import { STATUS } from "./Status";
import { MenuItem, Select, InputLabel } from "@mui/material";
import AutoComplete from "../AutoComplete/AutoComplete";
import SearchBox from "../SearchBox/SearchBox";
const AllSchoolsHeader = (props) => {
  return (
    <>
      <div className="flex-header">
        <div>
          <SearchBox
            placeHolder="جست‌وجوی مدارس بر اساس شناسه, نام و ..."
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
            searchTerm={props.searchTerm}
            staticInformation={props.staticInformation}
            setInformation={props.setInformation}
            handleSearch={props.searchHandler}
          />
        </div>
        <div>
          <AutoComplete
            setSearchTerm={props.setSearchTerm}
            searchTerm={props.searchTerm}
            options={["نام مدیر", "شناسه مدرسه", "نام مدرسه"]}
          />
        </div>
        <div>
          <InputLabel
            sx={{
              fontFamily: "vazir",
              fontSize: "0.8rem",
              direction: "ltr",
              textAlign: "left",
            }}
            id="select"
          >
            وضعیت مدرسه
          </InputLabel>
          <Select
            sx={{ width: "300px", fontFamily: "vazir" }}
            size={"small"}
            label="وضعیت مدرسه"
            labelId="select"
            id="select"
            value={props.schoolFilter}
            onChange={(e) => props.setSchoolFilter(e.target.value)}
          >
            {STATUS.map((a) => {
              return (
                <MenuItem
                  sx={{
                    fontFamily: "vazir",
                    textAlign: "right",
                    direction: "rtl",
                  }}
                  key={a.id}
                  value={a.ec}
                >
                  {a.pc}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </div>
    </>
  );
};

export default AllSchoolsHeader;
