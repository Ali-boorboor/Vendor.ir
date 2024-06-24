import UserDashboardPage from "@/pages/UserDashboardPage";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! user dashboard page story
const meta = {
  title: "UserDashboardPage",
  component: UserDashboardPage,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof UserDashboardPage>;

export default meta;
type Story = StoryObj<typeof UserDashboardPage>;

export const UserDashboard: Story = {
  args: {},
};
