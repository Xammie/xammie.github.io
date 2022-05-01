import React from 'react';
import Socials from '../Socials';
import Link from 'gatsby-link';

export default function Footer() {
    return (
        <footer className="flex flex-col-reverse items-center justify-between sm:flex-row">
            <div>
                &copy; {new Date().getFullYear()}{' '}
                <Link to="/" className="hover:underline">
                    Max Hoogenbosch
                </Link>
            </div>
            <Socials />
        </footer>
    );
}
