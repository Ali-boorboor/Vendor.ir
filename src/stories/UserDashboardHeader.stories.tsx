import UserDashboardHeader from "@/components/organisms/UserDashboardOrganisms/UserDashboardHeader";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! user dashboard page header section story
const meta = {
  title: "UserDashboardHeader",
  component: UserDashboardHeader,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof UserDashboardHeader>;

export default meta;
type Story = StoryObj<typeof UserDashboardHeader>;

export const UserDashboardHeaderSection: Story = {
  args: {},
};
