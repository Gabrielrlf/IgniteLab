import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps } from './TextInput'


export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your e-mail address" />
        ]
    },

} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
}


export const WithoutIcon: StoryObj<TextInputInputProps> = {
    argTypes: {
        children: <TextInput.Input placeholder="Type your e-mail address" />
    }
}
