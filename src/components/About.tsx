import Profile from "./Profile";
import Enrise from "../img/enrise.svg";
import Card from "./Card";
import React from "react";
import Socials from "./Socials";

export default function About() {
    return (
        <>
            <div className="block md:hidden p-5 flex-center">
                <Profile className="h-32 w-32 md:h-48 md:w-48"/>
            </div>
            <Card className="flex flex-col md:rounded-full">
                <div className="flex flex-col md:flex-row items-center">
                    <Profile className="h-32 w-32 md:h-48 md:w-48 hidden md:block"/>
                    <div className="flex-grow md:px-5 text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            Hey, I'm Max
                        </h1>
                        <div className="flex items-center text-xl md:text-2xl nowrap">
                            Full stack developer at
                            <a href="https://enrise.com"
                               target="_blank"
                               rel="noopener"
                               className="block md:inline h-12 p-2 mx-1 rounded clickable">
                                <Enrise width={null} height="100%"/>
                            </a>
                        </div>
                        <div className="hidden md:flex">
                            <Socials/>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}