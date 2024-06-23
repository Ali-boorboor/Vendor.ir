import ShopSignupFormWrapperPage from "@/pages/ShopSignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "ShopSignupFormPage",
  component: ShopSignupFormWrapperPage,
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
} satisfies Meta<typeof ShopSignupFormWrapperPage>;

export default meta;
type Story = StoryObj<typeof ShopSignupFormWrapperPage>;

export const ShopSignupFormWrapper: Story = {
  args: {},
};
