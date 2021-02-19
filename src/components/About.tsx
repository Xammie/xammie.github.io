import Profile from "./Profile";
import EnriseLight from "../img/enrise-light.svg";
import EnriseDark from "../img/enrise-dark.svg";
import Card from "./Card";
import React from "react";
import Socials from "./Socials";

export default function About({image}) {
    return (
        <>
            <div className="block md:hidden p-5 flex-center">
                <Profile image={image} className="h-32 w-32 md:h-48 md:w-48"/>
            </div>
            <Card className="flex items-center justify-center md:justify-start md:rounded-full">
                <Profile image={image} className="h-32 w-32 md:h-48 md:w-48 hidden md:block"/>
                <div className="flex flex-col md:px-5 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                        Hey, I'm Max
                    </h1>
                    <div className="flex items-center text-xl md:text-2xl">
                        Full stack developer at
                        <a href="https://enrise.com"
                           target="_blank"
                           rel="noopener"
                           className="block md:inline h-12 p-2 mx-1 rounded clickable">
                            <EnriseLight className="dark:hidden" width={null} height="100%"/>
                            <EnriseDark className="hidden dark:block" width={null} height="100%"/>
                        </a>
                    </div>
                    <div className="hidden md:flex">
                        <Socials/>
                    </div>
                </div>
            </Card>
        </>
    )
}