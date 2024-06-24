// FormOne.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { KeyStatisticsTemplate } from './KeyStatisticsReport';

const meta: Meta<typeof KeyStatisticsTemplate> = {
  title: 'pages/Reports/KeyStatisticsTemplate', 
  component: KeyStatisticsTemplate,
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