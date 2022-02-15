import React from "react";
import AdminManagementHeader from "./AdminManagement.Header";
import { Wrapper } from "./AdminManagement.styles";
import { Content } from "../SchoolInformation/SchoolInformation.styles";

const AdminManagement = () => {
  return (
    <>
      <Wrapper>
        <AdminManagementHeader />
        <Content></Content>
      </Wrapper>
    </>
  );
};

export default AdminManagement;
