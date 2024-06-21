// UBTextField.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBTextField } from './UBTextField';

const meta: Meta<typeof UBTextField> = {
  title: 'components/common/UBTextField', 
  component: UBTextField,
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