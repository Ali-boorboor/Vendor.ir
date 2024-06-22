import ShopSignupFormPage from "../pages/ShopSignupFormPage";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

const meta = {
  title: "ShopSignupFormPage",
  component: ShopSignupFormPage,
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
} satisfies Meta<typeof ShopSignupFormPage>;

export default meta;
type Story = StoryObj<typeof ShopSignupFormPage>;

export const ShopSignupForm: Story = {
  args: {},
};
