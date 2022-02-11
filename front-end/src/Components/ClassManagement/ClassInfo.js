const ClassInfo = ({ className, id }) => {
  return (
    <>
      <div className="flex-header">
        <div className="flex-item">کلاس: {className}</div>
        <div className="flex-item">شناسه کلاس: {id}</div>
      </div>
    </>
  );
};

export default ClassInfo;
