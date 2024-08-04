// FormOne.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { RecordsAndAdmissions } from './RecordsAndAdmissions';

const meta: Meta<typeof RecordsAndAdmissions> = {
  title: 'pages/Reports/RecordsAndAdmissions', 
  component: RecordsAndAdmissions,
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