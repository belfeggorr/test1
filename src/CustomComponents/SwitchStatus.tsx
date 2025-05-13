import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { red } from "@mui/material/colors";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      style={{ color: "white", background: "#0B0E11" }}
      sx={{ m: 1, minWidth: 160 }}
      size="small"
    >
      <legend style={{ width: "150px" }} />
      <InputLabel
        sx={{
          fontFamily: "Inter, sans-serif",
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        }}
        id="demo-select-small-label"
      >
        Все статусы
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        sx={{
          color: "white",
          "& .MuiSelect-icon": {
            color: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiSelect-select": {
            backgroundColor: "black",
          },
          "& .MuiOutlinedInput-notchedOutline .css-w1u3ce": {
            width: "80px",
          },
        }}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
