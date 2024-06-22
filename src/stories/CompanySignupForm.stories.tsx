import CompanySignupFormPage from "@/pages/CompanySignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "CompanySignupFormPage",
  component: CompanySignupFormPage,
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
} satisfies Meta<typeof CompanySignupFormPage>;

export default meta;
type Story = StoryObj<typeof CompanySignupFormPage>;

export const CompanySignupForm: Story = {
  args: {},
};
