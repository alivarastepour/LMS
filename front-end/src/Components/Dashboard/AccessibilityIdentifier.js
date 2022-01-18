import SchoolManagement from "../SchoolManagement/SchoolManagement";

const AccessibilityIdentifier = ({ role }) => {
  if (role === "manager") {
    return <SchoolManagement />;
  } else if (role === "teacher") {
    return <div>hi im a teacher</div>;
  } else {
    return <div>hi im a student</div>;
  }
};
export default AccessibilityIdentifier;
