import React from 'react';
import TagsComponent from '../components/Tags';
import Surface from "../components/Surface";

export default {
    title: 'Components/Tags',
    parameters: {
        layout: 'centered',
    },
    decorators: [(Story) => <Surface><Story/></Surface>],
};

export const Tags = () => <TagsComponent tags={['Test', 'Storybook', 'Hoogenbosch']}/>
