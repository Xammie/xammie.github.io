import React from 'react';
import IconComponent from "../components/Icon";
import Github from "../img/github.svg";

export default {
    title: 'Components/Icon',
    parameters: {
        layout: 'centered',
    },
};

export const Icon = (args) => (
    <IconComponent {...args}
                   href="#"
                   component="a"
                   onClick={e => e.preventDefault()}>
        <Github className="h-8"/>
    </IconComponent>
);