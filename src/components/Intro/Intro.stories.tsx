import React from 'react';
import IntroComponent from "./Intro";
import image from "/src/img/profile.jpg";
import Container from "../Container";

export default {
    title: 'Intro',
    decorators: [Story => <Container><Story/></Container>],
};

export const Intro = () => <IntroComponent image={<img alt="Max" src={image}/>}/>
