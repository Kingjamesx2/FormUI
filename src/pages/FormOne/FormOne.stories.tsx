// FormOne.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { FormOne } from './FormOne';

const meta: Meta<typeof FormOne> = {
  title: 'pages/FormOne', 
  component: FormOne,
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