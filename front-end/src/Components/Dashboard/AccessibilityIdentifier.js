import AdminManagement from "../AdminManagement/AdminManagement";
import SchoolManagement from "../SchoolManagement/SchoolManagement";
import StudentManagement from "../StudentManagement/StudentManagement";
import TeacherManagement from "../TeacherManagement/TeacherManagement";

const AccessibilityIdentifier = ({ role }) => {
  if (role === "manager") {
    return <SchoolManagement />;
  } else if (role === "teacher") {
    return <TeacherManagement />;
  } else if (role === "student") {
    return <StudentManagement />;
  } else if (role === "admin") {
    return <AdminManagement />;
  } else {
    return <></>;
  }
};
export default AccessibilityIdentifier;
