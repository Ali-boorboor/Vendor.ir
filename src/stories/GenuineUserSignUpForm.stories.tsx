import GenuineUserSignUpForm from "@/components/organisms/SignupPageOrganisms/GenuineUserSignUpForm";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! Genuine User SignUp Form component story
const meta: Meta<typeof GenuineUserSignUpForm> = {
  title: "GenuineUserSignUpForm",
  component: GenuineUserSignUpForm,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GenuineUserSignUpForm>;

export const GenuineSignUpPersonForm: Story = {
  args: {
    TypeOfApplicantSelectBoxLabel: "شخص",
    TypeOfApplicantSelectBoxDefaultValue: "person",
  },
};

export const GenuineSignUpShopForm: Story = {
  args: {
    TypeOfApplicantSelectBoxLabel: "فروشگاه",
    TypeOfApplicantSelectBoxDefaultValue: "shop",
  },
};

export const GenuineSignUpWorkshopForm: Story = {
  args: {
    TypeOfApplicantSelectBoxLabel: "کارگاه",
    TypeOfApplicantSelectBoxDefaultValue: "workshop",
  },
};
