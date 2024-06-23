import AuthFormsRightSection from "@c/organisms/AuthFormsRightSection";
import type { Meta, StoryObj } from "@storybook/react";

// ! login page right section
const meta: Meta<typeof AuthFormsRightSection> = {
  title: "RightFormsSection",
  component: AuthFormsRightSection,
};

export default meta;
type Story = StoryObj<typeof AuthFormsRightSection>;

export const RightSection: Story = {
  args: {},
};
