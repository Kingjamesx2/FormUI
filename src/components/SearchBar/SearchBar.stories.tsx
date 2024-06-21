// SearchBar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'components/SearchBar', 
  component: SearchBar,
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