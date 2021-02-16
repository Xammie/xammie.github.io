import React from 'react';
import Button from '../components/Button';

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

const Template = (args) => <Button {...args} to="/button"/>

export {Template as Button};


