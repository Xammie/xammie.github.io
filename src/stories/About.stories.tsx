import React from 'react';
import AboutComponent from "../components/About";
import image from "../img/profile.jpg";
import Container from "../components/Container";

export default {
    title: 'Hoogenbosch/Layout/About',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    },
};

export const About = () => <AboutComponent image={<img src={image}/>}/>
