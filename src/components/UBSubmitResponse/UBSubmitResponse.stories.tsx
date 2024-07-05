// UBSubmitResponse.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBSubmitResponse } from './UBSubmitResponse';

const meta: Meta<typeof UBSubmitResponse> = {
  title: 'components/UBSubmitResponse', 
  component: UBSubmitResponse,
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