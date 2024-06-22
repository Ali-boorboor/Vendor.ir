import PersonSignupMainSection from "../components/organisms/SignupPageOrganisms/PersonSignupMainSection";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "PersonSignupMainSection",
  component: PersonSignupMainSection,
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
} satisfies Meta<typeof PersonSignupMainSection>;

export default meta;
type Story = StoryObj<typeof PersonSignupMainSection>;

export const PersonSignupMain: Story = {
  args: {},
};
