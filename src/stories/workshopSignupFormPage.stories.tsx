import WorkshopSignupFormPage from "@/pages/WorkshopSignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "workshopSignupFormPage",
  component: WorkshopSignupFormPage,
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
} satisfies Meta<typeof WorkshopSignupFormPage>;

export default meta;
type Story = StoryObj<typeof WorkshopSignupFormPage>;

export const workshopSignupForm: Story = {
  args: {},
};
