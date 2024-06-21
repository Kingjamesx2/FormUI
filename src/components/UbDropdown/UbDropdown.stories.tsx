// UbDropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UbDropdown } from './UbDropdown';

const meta: Meta<typeof UbDropdown> = {
  title: 'components/UbDropdown', 
  component: UbDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
    args: {
      label: 'Faculty',
    },
  };