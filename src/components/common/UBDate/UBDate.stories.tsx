// UBDate.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import   UBDate  from './UBDate';

const meta: Meta<typeof UBDate> = {
  title: 'components/common/UBDate', 
  component: UBDate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
    args: {
      title: 'Next',
      backgroundColor: '#FFD954'
    },
  };