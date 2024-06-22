import { Button } from "@mui/material";
import { memo } from "react";
import { CustomButtonType } from "@/types/AtomsType";
import { Link } from "react-router-dom";

// ! button atom component that will get text & background-color & icon & ... as props
const CustomButton = memo(
  ({ text, bgColor, icon, color, size, href, onClickHandler, AtomClass }: CustomButtonType) => {
    return (
      <Button
        className={AtomClass}
        onClick={onClickHandler}
        startIcon={icon}
        variant="contained"
        component={Link}
        to={href}
        sx={{
          width: size,
          display: "flex",
          gap: "0.5rem",
          transition: "all 0.3s ease",
          fontWeight: "600",
          fontSize: "1rem",
          backgroundColor: bgColor,
          color: color,
          "&:hover": { opacity: "0.7", backgroundColor: bgColor },
        }}
      >
        {text}
      </Button>
    );
  }
);

export default CustomButton;
