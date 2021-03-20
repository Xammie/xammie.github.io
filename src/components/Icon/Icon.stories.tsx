import React from 'react';
import IconComponent from "./Icon";
import Github from "/src/img/github.svg";

export default {
    title: 'Icon',
    decorators: [Story => <div className="p-8"><Story/></div>],
};

export const Icon = (args) => (
    <IconComponent {...args}
                   href="#"
                   component="a"
                   aria-label="Github"
                   onClick={e => e.preventDefault()}>
        <Github className="h-8"/>
    </IconComponent>
);