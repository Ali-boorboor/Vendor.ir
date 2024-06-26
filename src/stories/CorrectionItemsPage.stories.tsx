import CorrectionItemsPage from "@/pages/CorrectionItemsPage";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// ! Correction Items Page story
const meta = {
  title: "CorrectionItemsPage",
  component: CorrectionItemsPage,
  args: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CorrectionItemsPage>;

export default meta;
type Story = StoryObj<typeof CorrectionItemsPage>;

export const CorrectionItems: Story = {
  args: {},
};
