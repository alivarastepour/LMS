import { schoolAction } from "./AllSchoolsHandlers";

export const STATUS = [
  { id: 1, pc: "رد شده", ec: "rejected" },
  { id: 2, pc: "پذیرفته شده", ec: "accepted" },
  { id: 3, pc: "تعلیق شده", ec: "suspended" },
  { id: 4, pc: "در انتظار تایید", ec: "pending" },
];

export const FILTER = [
  { id: 1, pc: "نام مدیر", ec: "manager" },
  { id: 2, pc: "نام مدرسه", ec: "name" },
  { id: 3, pc: "شناسه مدرسه", ec: "school_id" },
];

const STATUS_REJECTED = "rejected";
const STATUS_ACCEPTED = "accepted";
const STATUS_SUSPENDED = "suspended";

export const status = (state, id) => {
  const acc = (
    <>
      <button
        className="button sus"
        onClick={() => schoolAction(STATUS_SUSPENDED, id)}
      >
        تعلیق
      </button>
      <button
        className="button rem"
        onClick={() => schoolAction(STATUS_REJECTED, id)}
      >
        حذف
      </button>
    </>
  );
  const rej = <>رد شده</>;
  const sus = (
    <>
      <button
        className="button acc"
        onClick={() => schoolAction(STATUS_ACCEPTED, id)}
      >
        باز تایید
      </button>
      <button
        className="button rem"
        onClick={() => schoolAction(STATUS_REJECTED, id)}
      >
        حذف
      </button>
    </>
  );
  const pen = (
    <>
      <button
        className="button acc"
        onClick={() => schoolAction(STATUS_ACCEPTED, id)}
      >
        پذیرفتن
      </button>
      <button
        className="button rem"
        onClick={() => schoolAction(STATUS_REJECTED, id)}
      >
        حذف
      </button>
    </>
  );
  if (state === "accepted") {
    return acc;
  } else if (state === "suspended") {
    return sus;
  } else if (state === "rejected") {
    return rej;
  } else if (state === "pending") {
    return pen;
  }
};
