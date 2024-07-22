// Login.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'pages/LoginForm', 
  component: LoginForm,
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