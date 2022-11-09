import Profile from '../Profile';
import React from 'react';
import Socials from '../Socials';
import { EnriseDark, EnriseLight } from '../Icons';

export default function Intro({ image }) {
    return (
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-start md:gap-6">
            <div>
                <Profile
                    image={image}
                    className="h-32 w-32 duration-100 hover:rotate-6 hover:scale-105 sm:h-48 sm:w-48"
                />
            </div>
            <div className="flex flex-col items-center text-center md:items-stretch md:text-left">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-5xl">
                    Max Hoogenbosch
                </h1>
                <div className="flex items-center text-lg sm:text-xl md:text-2xl">
                    Full stack developer at
                    <a
                        href="https://enrise.com"
                        rel="noopener"
                        aria-label="View website of enrise"
                        className="clickable mx-1 block h-10 rounded p-2 sm:h-12 md:inline"
                    >
                        <EnriseLight
                            className="dark:hidden"
                            width={null}
                            height="100%"
                        />
                        <EnriseDark
                            className="hidden dark:block"
                            width={null}
                            height="100%"
                        />
                    </a>
                </div>
                <div className="hidden md:flex">
                    <Socials />
                </div>
            </div>
        </div>
    );
}
