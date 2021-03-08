import React from 'react';
import Surface from './Surface';
import Container from "../Container";

export default {
    title: 'Surface',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        children: {
            name: 'Text',
            control: 'text',
            defaultValue: 'This is some content',
        },
    },
};

export {Surface};


