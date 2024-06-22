import PersonSignupFormPage from "@/pages/PersonSignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "PersonSignupFormPage",
  component: PersonSignupFormPage,
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
} satisfies Meta<typeof PersonSignupFormPage>;

export default meta;
type Story = StoryObj<typeof PersonSignupFormPage>;

export const PersonSignupForm: Story = {
  args: {},
};
