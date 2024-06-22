import CompanySignupMainSection from "@c/organisms/SignupPageOrganisms/CompanySignupMainSection";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "CompanySignupMainSection",
  component: CompanySignupMainSection,
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
} satisfies Meta<typeof CompanySignupMainSection>;

export default meta;
type Story = StoryObj<typeof CompanySignupMainSection>;

export const CompanySignupMain: Story = {
  args: {},
};
