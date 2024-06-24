import CustomInput from "@c/atoms/CustomInput";
import PersonIcon from "@mui/icons-material/Person";
import ImageIcon from "@mui/icons-material/Image";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import type { Meta, StoryObj } from "@storybook/react";
import { Lock } from "@mui/icons-material";

// ! login & forgot-password pages input atoms stories
const meta: Meta<typeof CustomInput> = {
  title: "CustomInputs",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const UsernameInput: Story = {
  args: {
    icon: <PersonIcon />,
    type: "text",
    placeholder: "نام کاربری",
    size: "14rem",
  },
};

export const PasswordInput: Story = {
  args: {
    icon: <Lock />,
    type: "password",
    placeholder: "کلمه عبور",
    size: "14rem",
  },
};

export const SecurityCodeInput: Story = {
  args: {
    icon: <ImageIcon />,
    type: "text",
    placeholder: "تصویر امنیتی",
    size: "14rem",
  },
};

export const UsernameInputOfForgotPasswordPage: Story = {
  args: {
    icon: <HowToRegIcon />,
    type: "text",
    placeholder: "شناسه ملی (نام کاربری)",
    size: "14rem",
  },
};
