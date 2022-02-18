export const FILTER = [
  { id: 1, ec: "name", pc: "نام" },
  { id: 2, ec: "id", pc: "کد ملی" },
];

export const renderButton = (
  user,
  userHandler,
  content,
  setInformation,
  setStaticInformation
) => {
  if (user.status === "accepted") {
    return (
      <>
        <div className="acc st">پذیرفته شده</div>
        <button
          onClick={() =>
            userHandler(
              user,
              content,
              "rejected",
              setInformation,
              setStaticInformation
            )
          }
          className="st-button reject"
        >
          حذف
        </button>
      </>
    );
  } else if (user.status === "pending") {
    return (
      <div>
        <button
          onClick={() =>
            userHandler(
              user,
              content,
              "accepted",
              setInformation,
              setStaticInformation
            )
          }
          className="st-button accept"
        >
          پذیرفتن
        </button>
        <button
          onClick={() =>
            userHandler(
              user,
              content,
              "rejected",
              setInformation,
              setStaticInformation
            )
          }
          className="st-button reject"
        >
          رد کردن
        </button>
      </div>
    );
  } else {
    return <div className="rej">رد شده</div>;
  }
};
