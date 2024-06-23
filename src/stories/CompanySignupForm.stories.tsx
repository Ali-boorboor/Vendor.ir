import CompanySignupFormWrapperPage from "@/pages/CompanySignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "CompanySignupFormPage",
  component: CompanySignupFormWrapperPage,
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
} satisfies Meta<typeof CompanySignupFormWrapperPage>;

export default meta;
type Story = StoryObj<typeof CompanySignupFormWrapperPage>;

export const CompanySignupFormWrapper: Story = {
  args: {},
};
