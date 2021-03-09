import React from 'react';
import IntroComponent from "./Intro";
import image from "../../img/profile.jpg";
import Container from "../Container";

export default {
    title: 'Intro',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    },
};

export const Intro = () => <IntroComponent image={<img src={image}/>}/>
