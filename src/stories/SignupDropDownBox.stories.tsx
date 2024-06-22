import SignupDropDownBox from "@c/atoms/SignupDropDownBox";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "SignupDropDownBox",
  component: SignupDropDownBox,
  parameters: {
    layout: "centered",
  },
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof SignupDropDownBox>;

export default meta;
type Story = StoryObj<typeof SignupDropDownBox>;

export const SignupDropDownBoxCompany: Story = {
  args: {
    href: "#",
    text: "شرکت",
  },
};

export const SignupDropDownBoxShop: Story = {
  args: {
    href: "#",
    text: "فروشگاه",
  },
};

export const SignupDropDownBoxPerson: Story = {
  args: {
    href: "#",
    text: "شخص",
  },
};

export const SignupDropDownBoxWorkshop: Story = {
  args: {
    href: "#",
    text: "کارگاه",
  },
};
