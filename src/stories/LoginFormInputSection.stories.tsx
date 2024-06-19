import LoginFormInputsSection from "../components/molecules/LoginFormMolecules/LoginFormInputsSection";
import { RecoilRoot } from "recoil";
import type { Meta, StoryObj } from "@storybook/react";

// ! login form inputs section stories
const meta: Meta<typeof LoginFormInputsSection> = {
  title: "LoginForm-InputsSection",
  component: LoginFormInputsSection,
};

export default meta;
type Story = StoryObj<typeof LoginFormInputsSection>;

export const Inputs: Story = {
  args: {},
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};
