import SignupMain from "@c/organisms/SignupPageOrganisms/SignupMain";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const meta = {
  title: "SignupMain",
  component: SignupMain,
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
} satisfies Meta<typeof SignupMain>;

export default meta;
type Story = StoryObj<typeof SignupMain>;

export const SignupMainSection: Story = {
  args: {},
};
