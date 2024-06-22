import SignupNationalCode from "@c/molecules/SignupPageMolecules/SignupNationalCode";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const meta = {
  title: "SignupNationalCode",
  component: SignupNationalCode,
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
} satisfies Meta<typeof SignupNationalCode>;

export default meta;
type Story = StoryObj<typeof SignupNationalCode>;

export const SignupNationalCodeCompany: Story = {
  args: {
    title: "شرکت",
    inputLabel: "شناسه ملی",
  },
};

export const SignupNationalCodeShop: Story = {
  args: {
    title: "فروشگاه",
    inputLabel: "کد ملی",
  },
};

export const SignupNationalCodeWorkshop: Story = {
  args: {
    title: "کارگاه",
    inputLabel: "کد ملی",
  },
};

export const SignupNationalCodePerson: Story = {
  args: {
    title: "شخص",
    inputLabel: "کد ملی",
  },
};
