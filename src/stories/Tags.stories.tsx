import React from 'react';
import TagsComponent from '../components/Tags';
import Card from "../components/Card";

export default {
    title: 'Components/Tags',
    parameters: {
        layout: 'centered',
    },
    decorators: [(Story) => <Card><Story/></Card>],
};

export const Tags = () => <TagsComponent tags={['Test', 'Storybook', 'Hoogenbosch']}/>
