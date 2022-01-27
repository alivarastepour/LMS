import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";
import Classes from "./Classse";
import { Wrapper } from "./SchoolList.styles";
const fakeData = [
  {
    id: 1,
    name: "هوی",
    mName: "رستم",
    status: "خوب",
    classes: [
      { id: 10, className: "کلاس اول", instructor: "خانم آقابزاز" },
      { id: 11, className: "کلاس دوم", instructor: "خانم زائری" },
      { id: 112, className: "کلاس سوم", instructor: "خانم مهره‌کش" },
      { id: 120, className: "کلاس اول", instructor: "خانم آقابزاز" },
      { id: 131, className: "کلاس دوم", instructor: "خانم زائری" },
      { id: 142, className: "کلاس سوم", instructor: "خانم مهره‌کش" },
      { id: 1110, className: "کلاس اول", instructor: "خانم آقابزاز" },
      { id: 1221, className: "کلاس دوم", instructor: "خانم زائری" },
      { id: 1112, className: "کلاس سوم", instructor: "خانم مهره‌کش" },
    ],
  },
  {
    id: 2,
    name: "اوی",
    mName: "سهراب",
    status: "بد",
    classes: [
      { id: 13, className: "کلاس ی", instructor: "خانم ط" },
      { id: 14, className: "کلاس ب", instructor: "خانم ش" },
      { id: 15, className: "کلاس سوقم", instructor: "خانم ش" },
    ],
  },
  {
    id: 3,
    name: "عا",
    mName: "صبا",
    status: "زشت",
    classes: [
      { id: 16, className: "کلاس افول", instructor: "خانم آیقابزاز" },
      { id: 17, className: "کلاس دوفم", instructor: "خانم زائرلی" },
      { id: 18, className: "کلاس سوسم", instructor: "خانم مهبره‌کش" },
    ],
  },
  {
    id: 4,
    name: "اون",
    mName: "گرزعلی",
    status: "شاتر",
    classes: [
      { id: 19, className: "کلاس اول", instructor: "خانم آقابزازس" },
      { id: 20, className: "کلاسس دوم", instructor: "خانشم زائری" },
      { id: 21, className: "کلاس سوسم", instructor: "خانم مهره‌کش" },
    ],
  },
  {
    id: 5,
    name: "سیک",
    mName: "شتر",
    status: "ویپلش",
    classes: [
      { id: 22, className: "کلاس اوال", instructor: "خانم آاقابزاز" },
      { id: 23, className: "کلاسا دوم", instructor: "خانم زائری" },
      { id: 24, className: "کلابس سوم", instructor: "خانام مهره‌کش" },
    ],
  },
  {
    id: 6,
    name: "وات؟",
    mName: "شاش",
    status: "شت",
    classes: [
      { id: 25, className: "کللاس اول", instructor: "خانم آقابزاز" },
      { id: 26, className: "کلاس دومب", instructor: "خانم زائری" },
      { id: 27, className: "کلاس سوم", instructor: "خاقنم مهره‌کش" },
    ],
  },
  {
    id: 7,
    name: "فاک",
    mName: "عمو",
    status: "نیا",
    classes: [
      { id: 28, className: "کلاس اغول", instructor: "خانم آقابزاز" },
      { id: 29, className: "کلاس دوم", instructor: "خانم زائری" },
      { id: 30, className: "کلاس سفوم", instructor: "خانم مهره‌کش" },
    ],
  },
];

const SchoolList = () => {
  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState(null);
  return (
    <>
      <Wrapper>
        <table>
          <tbody>
            <tr>
              <td className="header">ردیف</td>
              <td className="header">نام مدرسه</td>
              <td className="header">نام مدیر</td>
              <td className="header">وضعیت</td>
            </tr>
            {fakeData.map((e) => {
              return (
                <>
                  <tr
                    className="hover"
                    key={e.id}
                    onClick={() => {
                      setClasses(e.classes);
                      setShow(true);
                    }}
                  >
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.mName}</td>
                    <td>{e.status}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <Dialog
          open={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <DialogTitle sx={{ textAlign: "right" }}>لیست کلاس‌ها</DialogTitle>
          <Classes classes={classes} />
        </Dialog>
      </Wrapper>
    </>
  );
};
export default SchoolList;
