import React from "react";
import Socials from "../Socials";

export default function Footer() {
    return (
        <footer className="flex flex-col-reverse sm:flex-row justify-between items-center md:px-5">
            <div>
                &copy; {new Date().getFullYear()} Max Hoogenbosch
            </div>
            <div className="flex mb-2 sm:mb-0">
                <Socials/>
            </div>
        </footer>
    );
}
