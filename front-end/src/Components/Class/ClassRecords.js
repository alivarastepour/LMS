const fakeData = [
  {
    length: 100,
    id: 2,
    link: "https://www.google.com/wtf/2",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 1,
    link: "https://www.google.com/wtf/1",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 3,
    link: "https://www.google.com/wtf/3",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 4,
    link: "https://www.google.com/wtf/4",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 5,
    link: "https://www.google.com/wtf/5",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 6,
    link: "https://www.google.com/wtf/2",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 7,
    link: "https://www.google.com/wtf/1",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 8,
    link: "https://www.google.com/wtf/3",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 9,
    link: "https://www.google.com/wtf/4",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 10,
    link: "https://www.google.com/wtf/5",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 11,
    link: "https://www.google.com/wtf/5",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 12,
    link: "https://www.google.com/wtf/2",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 13,
    link: "https://www.google.com/wtf/1",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 14,
    link: "https://www.google.com/wtf/3",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 15,
    link: "https://www.google.com/wtf/4",
    date: "22/02/2021",
  },
  {
    length: 100,
    id: 16,
    link: "https://www.google.com/wtf/5",
    date: "22/02/2021",
  },
];

const ClassRecords = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>شناسه</td>
            <td>لینک</td>
            <td>تاریخ</td>
          </tr>
          {fakeData.map((a) => {
            return (
              <tr className="hover" key={a.id}>
                <td>{a.id}</td>
                <td>{a.link}</td>
                <td>{a.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ClassRecords;
