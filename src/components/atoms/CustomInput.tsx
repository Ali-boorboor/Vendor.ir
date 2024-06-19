import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { memo } from "react";
import { CustomInputType } from "../../types/AtomsType";

// ! input atom component that will get placeholder-text & icon & ... as props
const CustomInput = memo(
  ({ icon, type, placeholder, size, setState, state, AtomClass }: CustomInputType) => {
    return (
      <FormControl
        variant="outlined"
        sx={{
          textAlign: "left",
          direction: "ltr",
          fontWeight: "400",
          fontSize: "0.9rem",
          width: size,
        }}
      >
        <InputLabel htmlFor="outlined-adornment-password">{placeholder}</InputLabel>
        <OutlinedInput
          className={AtomClass}
          value={state}
          onChange={(e) => setState(e.target.value)}
          id="outlined-adornment-password"
          type={type}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                {icon}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    );
  }
);

export default CustomInput;
