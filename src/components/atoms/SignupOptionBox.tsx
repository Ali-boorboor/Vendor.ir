import SettingsIcon from "@mui/icons-material/Settings";
import { memo } from "react";
import { Link } from "react-router-dom";
import { SignupOptionBoxType } from "@/types/AtomsType";

// ! red boxes in signup page that will let u choose what sort of signup form u wanna fill & get the following props
const SignupOptionBox = memo(({ href, text, id }: SignupOptionBoxType) => {
  return (
    <Link
      id={id}
      to={href}
      className="hover:scale-105 bg-color-red-500 py-8 px-4 rounded-xl flex justify-center items-center gap-1 flex-col w-40 h-24 text-white text-base font-medium"
    >
      <SettingsIcon sx={{ width: "2rem", color: "#fff" }} />
      {text}
    </Link>
  );
});

export default SignupOptionBox;
