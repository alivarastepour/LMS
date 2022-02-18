export const STATUS = [
  { id: 1, pc: "رد شده", ec: "rejected" },
  { id: 2, pc: "پذیرفته شده", ec: "accepted" },
  { id: 3, pc: "تعلیق شده", ec: "suspended" },
  { id: 4, pc: "در انتظار تایید", ec: "pending" },
];
export const status = (state) => {
  const acc = (
    <>
      <button className="button sus">تعلیق</button>
      <button className="button rem">حذف</button>
    </>
  );
  const rej = <>رد شده</>;
  const sus = (
    <>
      <button className="button acc">باز تایید</button>
      <button className="button rem">حذف</button>
    </>
  );
  const pen = (
    <>
      <button className="button acc">پذیرفتن</button>
      <button className="button rem">حذف</button>
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
