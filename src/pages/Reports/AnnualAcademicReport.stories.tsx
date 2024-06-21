// FormOne.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { AnnualAcademicReport } from './AnnualAcademicReport';

const meta: Meta<typeof AnnualAcademicReport> = {
  title: 'pages/AnnualAcademicReport', 
  component: AnnualAcademicReport,
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