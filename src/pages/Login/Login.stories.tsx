// Login.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Login } from './Login';

const meta: Meta<typeof Login> = {
  title: 'pages/Login', 
  component: Login,
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