import SignupOptionBox from "@c/atoms/SignupOptionBox";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "SignupOptionBox",
  component: SignupOptionBox,
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
} satisfies Meta<typeof SignupOptionBox>;

export default meta;
type Story = StoryObj<typeof SignupOptionBox>;

export const SignupOptionBoxCompany: Story = {
  args: {
    href: "#",
    text: "شرکت",
  },
};

export const SignupOptionBoxShop: Story = {
  args: {
    href: "#",
    text: "فروشگاه",
  },
};

export const SignupOptionBoxPerson: Story = {
  args: {
    href: "#",
    text: "شخص",
  },
};

export const SignupOptionBoxWorkshop: Story = {
  args: {
    href: "#",
    text: "کارگاه",
  },
};
