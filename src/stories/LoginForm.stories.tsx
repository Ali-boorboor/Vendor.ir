import LoginForm from "@c/organisms/LoginPageOrganisms/LoginForm";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

// ! login page (form right section) stories
const meta: Meta<typeof LoginForm> = {
  title: "LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Form: Story = {
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
