// UBCheckBox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBCheckBox } from './UBCheckBox';

const meta: Meta<typeof UBCheckBox> = {
  title: 'components/common/UBCheckBox', 
  component: UBCheckBox,
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