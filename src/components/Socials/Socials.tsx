import Icon from '../Icon';
import React from 'react';
import { Github } from '../Icons';
import { Twitter } from '../Icons';
import { Linkedin } from '../Icons';

export default function Socials() {
    return (
        <div
            className="-mx-2 flex space-x-0.5"
            role="navigation"
            aria-label="Links"
        >
            <Icon
                title="GitHub"
                rel="noopener"
                href="https://github.com/Xammie"
            >
                <Github className="h-6" />
            </Icon>
            <Icon
                title="LinkedIn"
                rel="noopener"
                href="https://www.linkedin.com/in/maxhoogenbosch/"
            >
                <Linkedin className="h-6" />
            </Icon>
            <Icon
                title="Twitter"
                rel="noopener"
                href="https://twitter.com/maxhoogenbosch"
            >
                <Twitter className="h-6" />
            </Icon>
        </div>
    );
}
