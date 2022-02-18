import { useEffect, useState } from "react";

import { Wrapper } from "./AllSchools.styles";

import AllSchoolsHeader from "./AllSchools.Header";
import AllSchoolsTable from "./AllSchoolsTable";

import { searchHandler } from "./AllSchoolsHandlers";
import useGet from "../../custom-hooks/useGet";

const AllSchools = () => {
  const [searchTerm, setSearchTerm] = useState("school_id");
  const [searchValue, setSearchValue] = useState("");
  const [information, setInformation] = useState([]);
  const [staticInformation, setStaticInformation] = useState([]);
  const [schoolFilter, setSchoolFilter] = useState("accepted");

  const { data } = useGet(
    `http://localhost:8000/study/admin/schools/${schoolFilter}`,
    sessionStorage.getItem("token")
  );

  useEffect(() => {
    setInformation(data);
    setStaticInformation(data);
  }, [data]);

  return (
    <>
      <Wrapper>
        <AllSchoolsHeader
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchTerm={searchTerm}
          staticInformation={staticInformation}
          setInformation={setInformation}
          searchHandler={searchHandler}
          setSearchTerm={setSearchTerm}
          schoolFilter={schoolFilter}
          setSchoolFilter={setSchoolFilter}
        />
        <AllSchoolsTable information={information} />
      </Wrapper>
    </>
  );
};

export default AllSchools;
