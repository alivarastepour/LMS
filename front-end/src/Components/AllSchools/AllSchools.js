import { useEffect, useState } from "react";

import { Wrapper } from "./AllSchools.styles";

import AllSchoolsHeader from "./AllSchools.Header";
import AllSchoolsTable from "./AllSchoolsTable";

import { searchHandler } from "./AllSchoolsHandlers";
import useGet from "../../custom-hooks/useGet";
import { host } from "../../Global/host";
import ErrorSnackbar from "../ErrorSnackbar/ErrorSnackbar";

const AllSchools = () => {
  const [searchTerm, setSearchTerm] = useState("school_id");
  const [searchValue, setSearchValue] = useState("");
  const [information, setInformation] = useState([]);
  const [staticInformation, setStaticInformation] = useState([]);
  const [schoolFilter, setSchoolFilter] = useState("pending");
  const [error, setError] = useState("");

  const { data } = useGet(
    `${host}study/admin/schools/${schoolFilter}`,
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
        <AllSchoolsTable information={information} setError={setError} />
        <ErrorSnackbar msg={error} open={!!error} setOpen={setError} />
      </Wrapper>
    </>
  );
};

export default AllSchools;
