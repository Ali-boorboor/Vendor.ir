import MainLogo from "../components/atoms/MainLogo";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "MainLogo",
  component: MainLogo,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof MainLogo>;

export default meta;
type Story = StoryObj<typeof MainLogo>;

export const MainLogoAtom: Story = {
  args: {},
};
