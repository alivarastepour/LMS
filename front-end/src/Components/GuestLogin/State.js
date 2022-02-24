import withInput from "../../HOC/withInput";

const State = ({
  name,
  clazz,
  setName,
  guestJoin,
  classID,
  setLink,
  setMessage,
  setSuccess,
  setOpen,
}) => {
  return (
    <>
      <h1 className="headerBox">
        ورود مهمان به {" " + clazz.class}, مدرسه {clazz.school}
      </h1>
      <div className="flex-container">
        <div>
          {withInput(
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              className="input"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!clazz.running}
            />,
            clazz.running
          )}
        </div>
        <div>
          <button
            className="button"
            onClick={() =>
              guestJoin(classID, name, setLink, setMessage, setSuccess, setOpen)
            }
            disabled={!clazz.running}
          >
            <b>دریافت لینک ورود</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default State;
