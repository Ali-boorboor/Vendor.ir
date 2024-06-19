import CustomButton from "../components/atoms/CustomButton";
import LoginIcon from "@mui/icons-material/Login";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import type { Meta, StoryObj } from "@storybook/react";
import { Lock } from "@mui/icons-material";
import { Link } from "@mui/icons-material";
import { BrowserRouter } from "react-router-dom";

// ! button atoms stories
const meta = {
  title: "CustomButtons",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const LoginButton: Story = {
  args: {
    href: "#",
    text: "ورود",
    bgColor: "#e80566",
    icon: <LoginIcon />,
    color: "#fff",
    size: "14rem",
  },
};

export const ForgotPasswordButton: Story = {
  args: {
    href: "#",
    text: "فراموشی رمز عبور",
    bgColor: "#f5b759",
    icon: <Lock />,
    color: "#fff",
    size: "14rem",
  },
};

export const SignUpButton: Story = {
  args: {
    href: "#",
    text: "ثبت نام جدید",
    bgColor: "#D1D3E0",
    icon: <Link />,
    color: "#000",
    size: "14rem",
  },
};

export const RequestToGetPasswordButton: Story = {
  args: {
    href: "#",
    text: "درخواست کلمه عبور",
    bgColor: "#e80566",
    icon: <PhonelinkLockIcon />,
    color: "#fff",
    size: "14rem",
  },
};

export const SwitchToLoginPageButton: Story = {
  args: {
    href: "#",
    text: "صفحه ورود",
    bgColor: "#f5b759",
    icon: <LoginIcon />,
    color: "#fff",
    size: "14rem",
  },
};
