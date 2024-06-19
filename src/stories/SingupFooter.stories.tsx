import SignupFooter from "../components/organisms/SignupPageOrganisms/SignupFooter";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "SignupFooter",
  component: SignupFooter,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof SignupFooter>;

export default meta;
type Story = StoryObj<typeof SignupFooter>;

export const SignupFooterSection: Story = {
  args: {},
};
