import { Story, Meta } from '@storybook/react/types-6-0'
import {} from '@storybook/addon-controls'
import Main from '.'

export default {
  title: 'Main',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'React Avançado',
  description: 'TypeScript , ReactJS, NextJS e Styled Components'
}
