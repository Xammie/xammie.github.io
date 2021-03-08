import React from 'react';
import TagsComponent from './Tags';
import Surface from "../Surface";

export default {
    title: 'Tags',
    parameters: {
        layout: 'centered',
    },
    decorators: [(Story) => <Surface><Story/></Surface>],
};

export const Tags = () => <TagsComponent tags={['Test', 'Storybook', 'Hoogenbosch']}/>
