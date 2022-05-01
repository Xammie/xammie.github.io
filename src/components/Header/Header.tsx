import React from 'react';
import Profile from '../Profile';
import Link from 'gatsby-link';
import Socials from '../Socials';
import Container from '../Container';

export default function Header({ image }) {
    return (
        <Container>
            <header className="flex items-center justify-between">
                <Link
                    to="/"
                    className="flex-center clickable overflow-hidden rounded-full"
                >
                    <Profile
                        image={image}
                        className="h-10 w-10 md:h-12 md:w-12"
                    />
                    <div className="mx-3 truncate text-lg font-bold md:text-xl">
                        Max Hoogenbosch
                    </div>
                </Link>
                <div className="hidden items-center justify-center sm:flex">
                    <Socials />
                </div>
            </header>
        </Container>
    );
}
