import React from 'react';
import HeaderComponent from '../components/Header';
import image from '../img/profile.jpg';
import Container from "../components/Container";

export default {
    title: 'Hoogenbosch/Layout/Header',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    },
};

export const Header = () => <HeaderComponent image={<img src={image}/>}/>
