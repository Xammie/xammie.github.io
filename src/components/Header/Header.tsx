import React from "react";
import Surface from "../Surface";
import Profile from "../Profile";
import Link from "gatsby-link";
import Socials from "../Socials";

export default function Header({image}) {
    return (
        <Surface className="flex items-center justify-between" rounded="md:rounded-full">
            <Link to="/"
                  className="flex-center rounded-full clickable overflow-hidden">
                <Profile image={image} className="w-10 h-10 md:w-12 md:h-12"/>
                <div className="font-bold text-lg md:text-xl truncate mx-3">
                    Max Hoogenbosch
                </div>
            </Link>
            <div className="hidden sm:flex justify-center items-center">
                <Socials/>
            </div>
        </Surface>
    )
}