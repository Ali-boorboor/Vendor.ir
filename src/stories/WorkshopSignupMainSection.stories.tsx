import WorkshopSignupMainSection from "../components/organisms/SignupPageOrganisms/WorkshopSignupMainSection";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "WorkshopSignupMainSection",
  component: WorkshopSignupMainSection,
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
} satisfies Meta<typeof WorkshopSignupMainSection>;

export default meta;
type Story = StoryObj<typeof WorkshopSignupMainSection>;

export const WorkshopSignupMain: Story = {
  args: {},
};
