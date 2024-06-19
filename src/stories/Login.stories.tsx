import Login from "../components/templates/Login";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

// ! login page template stories
const meta: Meta<typeof Login> = {
  title: "LoginPage-Template",
  component: Login,
};

export default meta;
type Story = StoryObj<typeof Login>;

export const LoginPage: Story = {
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
