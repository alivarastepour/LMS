import { FILTER, STATUS } from "./constant";
import SearchBox from "../SearchBox/SearchBox";
import Select from "../Select/Select";
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
          <Select
            title="فیلتر"
            selectWidth={300}
            size="small"
            value={props.searchTerm}
            setValue={props.setSearchTerm}
            data={FILTER}
          />
        </div>
        <div>
          <Select
            title="وضعیت مدرسه"
            selectWidth={300}
            size="small"
            value={props.schoolFilter}
            setValue={props.setSchoolFilter}
            data={STATUS}
          />
        </div>
      </div>
    </>
  );
};

export default AllSchoolsHeader;
