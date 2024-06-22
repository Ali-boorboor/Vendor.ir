import ShopSignupMainSection from "../components/organisms/SignupPageOrganisms/ShopSignupMainSection";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "ShopSignupMainSection",
  component: ShopSignupMainSection,
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
} satisfies Meta<typeof ShopSignupMainSection>;

export default meta;
type Story = StoryObj<typeof ShopSignupMainSection>;

export const ShopSignupMain: Story = {
  args: {},
};
