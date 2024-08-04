// FormOne.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { HumanResourceStatistics } from '../../pages/Reports/HumanResourceStatistics';

const meta: Meta<typeof HumanResourceStatistics> = {
  title: 'pages/Reports/HumanResourceStatistics', 
  component: HumanResourceStatistics,
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