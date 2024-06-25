// UBUploadFile.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBUploadFile } from './UBUploadFile';

const meta: Meta<typeof UBUploadFile> = {
  title: 'components/common/UBUploadFile', 
  component: UBUploadFile,
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