import UserDashboardOptionBox from "@/components/atoms/UserDashboardOptionBox";
import LogoutIcon from "@mui/icons-material/Logout";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ListIcon from "@mui/icons-material/List";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! option box of user dashboard page atoms stories
const meta = {
  title: "UserDashboardOptionBox",
  component: UserDashboardOptionBox,
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
} satisfies Meta<typeof UserDashboardOptionBox>;

export default meta;
type Story = StoryObj<typeof UserDashboardOptionBox>;

export const UserDashboardOptionBoxSignup: Story = {
  args: {
    icon: <LogoutIcon sx={{ fontSize: "4rem" }} className="text-orange-600" />,
    label: "ثبت نام",
    href: "#",
  },
};

export const UserDashboardOptionBoxCorrections: Story = {
  args: {
    icon: <PriorityHighIcon sx={{ fontSize: "4rem" }} className="text-orange-600" />,
    label: "موارد اصلاحی",
    href: "#",
  },
};

export const UserDashboardOptionBoxList: Story = {
  args: {
    icon: <ListIcon sx={{ fontSize: "4rem" }} className="text-orange-600" />,
    label: "لیست استعلام",
    href: "#",
  },
};
