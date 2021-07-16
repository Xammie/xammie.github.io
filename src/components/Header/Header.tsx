import React from 'react';
import Profile from '../Profile';
import Link from 'gatsby-link';
import Socials from '../Socials';

export default function Header({ image }) {
    return (
        <div className="flex justify-between items-center">
            <Link to="/"
                className="overflow-hidden rounded-full flex-center clickable">
                <Profile image={image} className="w-10 h-10 md:w-12 md:h-12"/>
                <div className="mx-3 text-lg font-bold md:text-xl truncate">
                    Max Hoogenbosch
                </div>
            </Link>
            <div className="hidden justify-center items-center sm:flex">
                <Socials/>
            </div>
        </div>
    );
}