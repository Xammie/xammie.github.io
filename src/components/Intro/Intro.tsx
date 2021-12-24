import Profile from '../Profile';
import EnriseLight from '/src/img/enrise-light.svg';
import EnriseDark from '/src/img/enrise-dark.svg';
import React from 'react';
import Socials from '../Socials';

export default function Intro({ image }) {
    return (
        <div
            className="flex flex-col gap-5 justify-center items-center md:flex-row md:gap-6 md:justify-start">
            <div>
                <Profile
                    image={image}
                    className="w-32 h-32 duration-100 sm:w-48 sm:h-48 hover:scale-105 hover:rotate-6"/>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-5xl">
                    Max Hoogenbosch
                </h1>
                <div className="flex items-center text-lg sm:text-xl md:text-2xl">
                    Full stack developer at
                    <a href="https://enrise.com"
                        rel="noopener"
                        aria-label="View website of enrise"
                        className="block p-2 mx-1 h-10 rounded sm:h-12 md:inline clickable">
                        <EnriseLight className="dark:hidden" width={null} height="100%"/>
                        <EnriseDark className="hidden dark:block" width={null} height="100%"/>
                    </a>
                </div>
                <div className="hidden md:flex">
                    <Socials/>
                </div>
            </div>
        </div>
    );
}