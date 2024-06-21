// NextButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { NextButton } from './NextButton';

const meta: Meta<typeof NextButton> = {
  title: 'components/common/NextButton', 
  component: NextButton,
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