import { Autocomplete, TextField } from "@mui/material";

import { Wrapper } from "./AutoComplete.styles";

const AutoComplete = ({ setSearchTerm, searchTerm, options }) => {
  return (
    <>
      <Wrapper>
        <Autocomplete
          className="autocomplete"
          size="small"
          options={options}
          renderInput={(p) => <TextField {...p} label="فیلتر" />}
          sx={{
            width: 300,
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            background: "#F8F8F8",
          }}
          onChange={(e, v) => {
            setSearchTerm(v);
          }}
          value={searchTerm}
          defaultValue={options[0]}
        />
      </Wrapper>
    </>
  );
};

export default AutoComplete;
