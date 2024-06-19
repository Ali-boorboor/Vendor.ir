import ForgotPassword from "../components/templates/ForgotPassword";
import { RecoilRoot } from "recoil";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! forgot password page template stories
const meta: Meta<typeof ForgotPassword> = {
  title: "ForgotPasswordPage-Template",
  component: ForgotPassword,
};

export default meta;
type Story = StoryObj<typeof ForgotPassword>;

export const ForgotPasswordPage: Story = {
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
};
