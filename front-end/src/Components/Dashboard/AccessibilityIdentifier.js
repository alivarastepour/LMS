import SchoolManagement from "../SchoolManagement/SchoolManagement";
import StudentManagement from "../StudentManagement/StudentManagement";
import TeacherManagement from "../TeacherManagement/TeacherManagement";

const AccessibilityIdentifier = ({ role }) => {
  if (role === "manager") {
    return <SchoolManagement />;
  } else if (role === "teacher") {
    return <TeacherManagement />;
  } else {
    return <StudentManagement />;
  }
};
export default AccessibilityIdentifier;
