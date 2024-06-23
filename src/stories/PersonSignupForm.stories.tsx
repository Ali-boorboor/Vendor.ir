import PersonSignupFormWrapperPage from "@/pages/PersonSignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "PersonSignupFormPage",
  component: PersonSignupFormWrapperPage,
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
} satisfies Meta<typeof PersonSignupFormWrapperPage>;

export default meta;
type Story = StoryObj<typeof PersonSignupFormWrapperPage>;

export const PersonSignupFormWrapper: Story = {
  args: {},
};
