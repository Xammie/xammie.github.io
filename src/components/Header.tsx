import React from "react";
import Card from "./Card";
import Profile from "./Profile";
import {OutboundLink} from "gatsby-plugin-gtag";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import Link from "gatsby-link";

export default function Header() {
    return (
        <Card className="flex items-center justify-between rounded-full">
            <Link to="/"
                  className="flex-center rounded-full hover:bg-gray-800 focus:ring ring-blue-600 pr-3 overflow-hidden">
                <Profile className="w-12 h-12 mr-3"/>
                <div className="font-bold text-lg md:text-xl truncate">
                    Max Hoogenbosch
                </div>
            </Link>
            <div className="hidden sm:flex justify-center items-center">
                <OutboundLink title="My Github Profile"
                              href="https://github.com/Xammie"
                              className="flex-center w-12 h-12 rounded transition transition-colors duration-100 hover:bg-blue-900 focus:bg-gray-900 focus:ring-4 focus:ring-blue-700">
                    <Github className="h-8"/>
                </OutboundLink>
                <OutboundLink title="My LinkedIn Profile"
                              href="https://www.linkedin.com/in/maxhoogenbosch/"
                              className="flex-center w-12 h-12 rounded transition transition-colors duration-100 hover:bg-blue-900 focus:bg-gray-900 focus:ring-4 focus:ring-blue-700">
                    <Linkedin className="h-8"/>
                </OutboundLink>
            </div>
        </Card>
    )
}