import WorkshopSignupFormWrapperPage from "@/pages/WorkshopSignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "workshopSignupFormPage",
  component: WorkshopSignupFormWrapperPage,
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
} satisfies Meta<typeof WorkshopSignupFormWrapperPage>;

export default meta;
type Story = StoryObj<typeof WorkshopSignupFormWrapperPage>;

export const workshopSignupFormWrapper: Story = {
  args: {},
};
