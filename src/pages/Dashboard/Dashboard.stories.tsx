// Dashboard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Dashboard } from './Dashboard';

const meta: Meta<typeof Dashboard> = {
  title: 'pages/Dashboard', 
  component: Dashboard,
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