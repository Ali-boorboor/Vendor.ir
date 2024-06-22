import RightSectionForms from "@c/organisms/RightSectionForms";
import type { Meta, StoryObj } from "@storybook/react";

// ! login page right section
const meta: Meta<typeof RightSectionForms> = {
  title: "RightFormsSection",
  component: RightSectionForms,
};

export default meta;
type Story = StoryObj<typeof RightSectionForms>;

export const RightSection: Story = {
  args: {},
};
