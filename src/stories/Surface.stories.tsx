import React from 'react';
import Surface from '../components/Surface';
import Container from "../components/Container";

export default {
    title: 'Components/Surface',
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


