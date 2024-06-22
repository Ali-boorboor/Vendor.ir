import PersonSignupForm from "../components/templates/PersonSignupForm";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "PersonSignupForm",
  component: PersonSignupForm,
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
} satisfies Meta<typeof PersonSignupForm>;

export default meta;
type Story = StoryObj<typeof PersonSignupForm>;

export const PersonSignupFormPage: Story = {
  args: {},
};
