// UBInfoTable.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import UBInfoTable from "./UBInfoTable";

const meta: Meta<typeof UBInfoTable> = {
  title: 'components/common/UBInfoTable', 
  component: UBInfoTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
    args: {

    },
  };