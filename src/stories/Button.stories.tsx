import React from 'react';
import ButtonComponent from '../components/Button';

export default {
    title: 'Components/Button',
    argTypes: {
        children: {
            name: 'Text',
            control: 'text',
            defaultValue: 'Click me!',
        },
    },
    parameters: {
        layout: 'centered',
    }
};

export const Button = (args) => <ButtonComponent {...args} to="/button"/>
