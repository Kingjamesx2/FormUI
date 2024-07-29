// UserPosition.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UserPosition } from './UserPosition';

const meta: Meta<typeof UserPosition> = {
  title: 'components/UserPosition', 
  component: UserPosition,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
  args: {
    logOut: 'src/components/icons/jamesFaber.jpeg',
    name: 'James Faber',
    position: 'Software Engineer',
  },
};