import React from 'react';

import Card from '../components/Card';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        children: {
            name: 'Text',
            control: 'text',
            defaultValue: 'This is some content',
        },
    },
};

export {Card};


