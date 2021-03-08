import React from 'react';
import HeaderComponent from './Header';
import image from '../../img/profile.jpg';
import Container from "../Container";

export default {
    title: 'Header',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    },
};

export const Header = () => <HeaderComponent image={<img src={image}/>}/>
