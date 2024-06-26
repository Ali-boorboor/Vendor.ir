import TransactionRegistrationSystemPage from "@/pages/TransactionRegistrationSystemPage";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! Transaction Registration System Page story
const meta = {
  title: "TransactionRegistrationSystemPage",
  component: TransactionRegistrationSystemPage,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof TransactionRegistrationSystemPage>;

export default meta;
type Story = StoryObj<typeof TransactionRegistrationSystemPage>;

export const TransactionRegistrationSystem: Story = {
  args: {},
};
