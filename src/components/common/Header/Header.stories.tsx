// Header.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header"
const meta: Meta<typeof Header> = {
  title: 'components/common/Header', 
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
    args: {
        logo: "./../icons/UB_Logo.png",
        title: 'UB Annual Report Template Academic Division'
    },
  };