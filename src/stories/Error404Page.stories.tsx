import Error404Page from "@/pages/Error404Page";
import { Meta, StoryObj } from "@storybook/react";

// ! error 404 page story
const meta = {
  title: "Error404Page",
  component: Error404Page,
} satisfies Meta<typeof Error404Page>;

export default meta;
type Story = StoryObj<typeof Error404Page>;

export const LoginButton: Story = {
  args: {},
};
