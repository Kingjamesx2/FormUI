// InfoTable.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import InfoTable from "./UBNumberInput";

const meta: Meta<typeof InfoTable> = {
  title: 'components/common/UBNumberInput', 
  component: InfoTable,
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