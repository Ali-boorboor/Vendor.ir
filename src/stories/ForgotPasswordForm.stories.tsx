import ForgotPasswordForm from "@c/organisms/ForgotPasswordPageOrganisms/ForgotPasswordForm";
import { RecoilRoot } from "recoil";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! forgot password page (form right section) stories
const meta: Meta<typeof ForgotPasswordForm> = {
  title: "ForgotPasswordForm",
  component: ForgotPasswordForm,
};

export default meta;
type Story = StoryObj<typeof ForgotPasswordForm>;

export const FormSection: Story = {
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
