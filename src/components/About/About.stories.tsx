import React from 'react';
import AboutComponent from "./About";
import image from "../../img/profile.jpg";
import Container from "../Container";

export default {
    title: 'About',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    },
};

export const About = () => <AboutComponent image={<img src={image}/>}/>
