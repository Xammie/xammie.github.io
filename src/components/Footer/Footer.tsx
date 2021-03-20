import React from "react";
import Socials from "../Socials";
import Link from "gatsby-link";
import ThemeToggle from "../ThemeToggle";

export default function Footer() {
    return (
        <footer className="flex flex-col-reverse sm:flex-row justify-between items-center md:mx-5">
            <div className="flex items-center">
                <ThemeToggle/>
                <div className="ml-2 md:ml-5">
                    &copy; {new Date().getFullYear()} <Link to="/" className="hover:underline">Max Hoogenbosch</Link>
                </div>
            </div>
            <Socials/>
        </footer>
    );
}
