// SelectAutoWidth.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { SelectAutoWidth } from './SelectAutoWidth';

const meta: Meta<typeof SelectAutoWidth> = {
  title: 'components/SelectAutoWidth', 
  component: SelectAutoWidth,
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