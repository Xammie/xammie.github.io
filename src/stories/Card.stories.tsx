import React from 'react';
import Card from '../components/Card';
import Container from "../components/Container";

export default {
    title: 'Hoogenbosch/Components/Card',
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

export {Card};


