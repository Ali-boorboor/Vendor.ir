import UserDashboardMain from "@/components/organisms/UserDashboardOrganisms/UserDashboardMain";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! user dashboard page main section story
const meta = {
  title: "UserDashboardMain",
  component: UserDashboardMain,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof UserDashboardMain>;

export default meta;
type Story = StoryObj<typeof UserDashboardMain>;

export const UserDashboardMainSection: Story = {
  args: {},
};
