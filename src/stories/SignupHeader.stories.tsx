import SignupHeader from "@c/organisms/SignupPageOrganisms/SignupHeader";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "SignupHeader",
  component: SignupHeader,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof SignupHeader>;

export default meta;
type Story = StoryObj<typeof SignupHeader>;

export const SignupHeaderSection: Story = {
  args: {},
};
