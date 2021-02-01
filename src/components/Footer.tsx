import React from "react";
import Socials from "./Socials";

export default function Footer() {
    return (
        <div className="flex justify-between items-center">
            <div>
                &copy; {new Date().getFullYear()} Max Hoogenbosch
            </div>
            <div className="flex">
                <Socials/>
            </div>
        </div>
    );
}
