import Profile from "./Profile";
import Enrise from "../img/enrise.svg";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import Card from "./Card";
import React from "react";
import Icon from "./Icon";

export default function About() {
    return (
        <Card className="flex flex-col md:rounded-full">
            <div className="flex flex-col md:flex-row items-center">
                <Profile className="h-32 w-32 md:h-48 md:w-48"/>
                <div className="flex-grow px-5">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left"
                        style={{textShadow: "#ff0000bf 4px -4px 4px, blue -4px 4px 4px"}}>
                        Hey, I'm Max
                    </h1>
                    <div className="flex items-center text-xl md:text-2xl">
                        Full Stack developer at
                        <a href="https://enrise.com" target="_blank"
                           className="block md:inline-block h-12 p-2 mx-1 rounded hover:bg-blue-900 focus:bg-blue-900 focus:ring-4 ring-blue-700">
                            <Enrise width={null} height="100%"/>
                        </a>
                    </div>
                    <div className="flex">
                        <Icon title="My Github Profile"
                              href="https://github.com/Xammie">
                            <Github className="h-8"/>
                        </Icon>
                        <Icon title="My LinkedIn Profile"
                              href="https://www.linkedin.com/in/maxhoogenbosch/">
                            <Linkedin className="h-8"/>
                        </Icon>
                    </div>
                </div>
            </div>
        </Card>
    )
}