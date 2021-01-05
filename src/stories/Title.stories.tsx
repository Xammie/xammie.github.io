import React from 'react';

export default {
    title: 'Title',
    argTypes: {
        children: {
            name: 'Text',
            control: 'text',
            defaultValue: 'This is a title',
        },
    },
};

export const Title = (args) => <div className="title text-white text-2xl" {...args}/>

