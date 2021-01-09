import {OutboundLink} from "gatsby-plugin-gtag";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import React from "react";

export default function Footer() {
    return (
        <div className="flex justify-between items-center">
            <div>
                &copy; {new Date().getFullYear()} Max Hoogenbosch
            </div>
            <div className="flex">
                <OutboundLink title="My Github Profile"
                              href="https://github.com/Xammie"
                              className="flex-center w-12 h-12 rounded transition transition-colors duration-100 hover:bg-blue-900 focus:bg-blue-900 focus:bg-gray-900 focus:ring-4 focus:ring-blue-700">
                    <Github className="h-8"/>
                </OutboundLink>
                <OutboundLink title="My LinkedIn Profile"
                              href="https://www.linkedin.com/in/maxhoogenbosch/"
                              className="flex-center w-12 h-12 rounded transition transition-colors duration-100 hover:bg-blue-900 focus:bg-blue-900 focus:bg-gray-900 focus:ring-4 focus:ring-blue-700">
                    <Linkedin className="h-8"/>
                </OutboundLink>
            </div>
        </div>
    );
}
