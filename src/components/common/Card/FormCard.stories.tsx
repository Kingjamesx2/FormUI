// FormCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { FormCard } from './FormCard';

const meta: Meta<typeof FormCard> = {
  title: 'components/common/FormCard', 
  component: FormCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
    args: {
      formPreview: 'src/components/icons/formPreview.png',
      title: 'UB Annual Report Template Academic Division'
    },
  };