const ClassInfo = ({ className, teacher, id }) => {
  return (
    <>
      <div className="flex-header">
        <div className="flex-item">کلاس: {className}</div>
        <div className="flex-item">ارائه دهنده: {teacher}</div>
        <div className="flex-item">شناسه کلاس: {id}</div>
      </div>
    </>
  );
};

export default ClassInfo;
