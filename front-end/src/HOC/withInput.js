import { Tooltip } from "@mui/material";

const withInput = (Component, state) => {
  if (!state) {
    return (
      <Tooltip
        title={
          <div style={{ fontFamily: "vazir" }}>کلاس هنوز آغاز نشده است</div>
        }
      >
        {Component}
      </Tooltip>
    );
  } else {
    return Component;
  }
};

export default withInput;
