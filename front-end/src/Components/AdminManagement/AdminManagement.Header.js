import React from "react";
import { Wrapper } from "./AdminManagement.Header.styles";

const AdminManagementHeader = () => {
  return (
    <>
      <Wrapper>
        <button className="button  active">درخواست های ثبت مدرسه</button>
        <button className="button margin inactive">مدارس ثبت شده</button>
      </Wrapper>
    </>
  );
};

export default AdminManagementHeader;
