// App.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  App from './App';

const meta: Meta<typeof App> = {
  title: 'App', 
  component: App,
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