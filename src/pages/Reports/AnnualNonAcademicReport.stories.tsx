// FormOne.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { AnnualNonAcademicReport } from '../../pages/Reports/AnnualNonAcademicReport';

const meta: Meta<typeof AnnualNonAcademicReport> = {
  title: 'pages/Reports/AnnualNonAcademicReport', 
  component: AnnualNonAcademicReport,
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