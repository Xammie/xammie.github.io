import React from 'react';
import Button from '../components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            name: 'Text',
            control: 'text',
            defaultValue: 'Click me!',
        },
    },
};

const Template = (args) => <Button {...args} to="/button"/>

export {Template as Button};


