import SchoolManagement from "../SchoolManagement/SchoolManagement";
import StudentManagement from "../StudentManagement/StudentManagement";

const AccessibilityIdentifier = ({ role }) => {
  if (role === "manager") {
    return <SchoolManagement />;
  } else if (role === "teacher") {
    return <div>hi im a teacher</div>;
  } else {
    return <StudentManagement />;
  }
};
export default AccessibilityIdentifier;
