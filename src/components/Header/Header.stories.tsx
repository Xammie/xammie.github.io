import React from 'react';
import HeaderComponent from './Header';
import image from '/src/img/profile.jpg';
import Container from "../Container";

export default {
    title: 'Header',
    decorators: [Story => <Container><Story/></Container>],
};

export const Header = () => <HeaderComponent image={<img alt="Max" src={image}/>}/>
