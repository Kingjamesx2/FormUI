// ListItems.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { ListItems } from './ListItems';

const meta: Meta<typeof ListItems> = {
  title: 'components/ListItems', 
  component: ListItems,
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