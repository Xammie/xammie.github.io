import React from 'react';
import Profile from '../Profile';
import { Link } from 'gatsby';
import Socials from '../Socials';
import Container from '../Container';
import { StaticImage } from 'gatsby-plugin-image';

export default function Header() {
    return (
        <Container>
            <header className="flex flex-col items-center justify-between sm:flex-row">
                <Link
                    to="/"
                    className="flex-center clickable overflow-hidden rounded-full"
                >
                    <Profile
                        image={
                            <StaticImage
                                src="../../img/profile.png"
                                alt="Max Hoogenbosch"
                                className="rounded-full"
                                imgClassName="rounded-full"
                                width={100}
                                height={100}
                            />
                        }
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
