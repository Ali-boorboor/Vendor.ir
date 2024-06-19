import LoginFormButtonsSection from "../components/molecules/LoginFormMolecules/LoginFormButtonsSection";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

// ! login form buttons section stories
const meta: Meta<typeof LoginFormButtonsSection> = {
  title: "LoginForm-ButtonsSection",
  component: LoginFormButtonsSection,
};

export default meta;
type Story = StoryObj<typeof LoginFormButtonsSection>;

export const Buttons: Story = {
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
