import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const meta = {
  title: "NationalCodeSignupForm",
  component: NationalCodeSignupForm,
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
} satisfies Meta<typeof NationalCodeSignupForm>;

export default meta;
type Story = StoryObj<typeof NationalCodeSignupForm>;

export const NationalCodeSignupFormCompany: Story = {
  args: {
    title: "شرکت",
    inputLabel: "شناسه ملی",
  },
};

export const NationalCodeSignupFormShop: Story = {
  args: {
    title: "فروشگاه",
    inputLabel: "کد ملی",
  },
};

export const NationalCodeSignupFormWorkshop: Story = {
  args: {
    title: "کارگاه",
    inputLabel: "کد ملی",
  },
};

export const NationalCodeSignupFormPerson: Story = {
  args: {
    title: "شخص",
    inputLabel: "کد ملی",
  },
};
