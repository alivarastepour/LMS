import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { Wrapper } from "./SearchBox.styles";

const SearchBox = ({
  searchValue,
  setSearchValue,
  handleSearch,
  staticInformation,
  setInformation,
  searchTerm,
  placeHolder,
}) => {
  return (
    <>
      <Wrapper>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
          sx={{
            width: 380,
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            background: "#F8F8F8",
          }}
          label="جستجو"
          placeholder={placeHolder}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch(e, staticInformation, setInformation, searchTerm);
          }}
          type="text"
        />
      </Wrapper>
    </>
  );
};

export default SearchBox;
