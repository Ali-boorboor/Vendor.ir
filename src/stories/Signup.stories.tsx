import Signup from "@c/templates/Signup";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const meta = {
  title: "Signup-Template",
  component: Signup,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Signup>;

export default meta;
type Story = StoryObj<typeof Signup>;

export const SignupTemplate: Story = {
  args: {},
};
