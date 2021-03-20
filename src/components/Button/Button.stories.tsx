import React from 'react';
import ButtonComponent from './Button';

export default {
    title: 'Button',
    decorators: [Story => <div className="p-8"><Story/></div>],
    argTypes: {
        children: {
            name: 'Text',
            control: 'text',
            defaultValue: 'Click me!',
        },
    },
};

export const Button = args => <ButtonComponent {...args} to="/button"/>
