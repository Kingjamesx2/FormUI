// UBContainerFluid.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBContainerFluid } from './UBContainerFluid';

const meta: Meta<typeof UBContainerFluid> = {
  title: 'components/common/UBContainerFluid', 
  component: UBContainerFluid,
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