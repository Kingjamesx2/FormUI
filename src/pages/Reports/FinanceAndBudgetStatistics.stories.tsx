// FormOne.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { FinanceAndBudgetStatistics } from '../../pages/Reports/FinanceAndBudgetStatistics';

const meta: Meta<typeof FinanceAndBudgetStatistics> = {
  title: 'pages/Reports/FinanceAndBudgetStatistics', 
  component: FinanceAndBudgetStatistics,
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