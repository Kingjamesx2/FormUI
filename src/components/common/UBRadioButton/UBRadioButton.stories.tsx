// UBRadioButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBRadioButton } from './UBRadioButton';

const meta: Meta<typeof UBRadioButton> = {
  title: 'components/common/UBRadioButton', 
  component: UBRadioButton,
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