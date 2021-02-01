import React from "react";
import Card from "./Card";
import Profile from "./Profile";
import Link from "gatsby-link";
import Socials from "./Socials";

export default function Header() {
    return (
        <Card className="flex items-center justify-between rounded-full">
            <Link to="/"
                  className="flex-center rounded-full clickable pr-3 overflow-hidden">
                <Profile className="w-12 h-12 mr-3"/>
                <div className="font-bold text-lg md:text-xl truncate">
                    Max Hoogenbosch
                </div>
            </Link>
            <div className="hidden sm:flex justify-center items-center">
                <Socials/>
            </div>
        </Card>
    )
}