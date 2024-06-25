// UBPaper.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBPaper } from './UBPaper';

const meta: Meta<typeof UBPaper> = {
  title: 'components/common/UBPaper', 
  component: UBPaper,
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