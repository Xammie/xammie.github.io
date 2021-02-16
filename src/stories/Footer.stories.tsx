import React from 'react';
import Footer from "../components/Footer";
import Container from "../components/Container";

export default {
    title: 'Hoogenbosch/Layout/Footer',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    },
};

export {Footer};
