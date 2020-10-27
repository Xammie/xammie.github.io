import React from "react";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";

export default function Header() {
    return (
        <div className="fixed z-20 right-0 flex p-2 flex-row items-center justify-end">
            <a title="My Github Profile"
               href="https://github.com/Xammie"
               className="p-2 hover:bg-gray-900 rounded transition transition-colors duration-100">
                <Github className="h-6"/>
            </a>
            <a title="My LinkedIn Profile"
               href="https://www.linkedin.com/in/maxhoogenbosch/"
               className="p-2 hover:bg-gray-900 rounded transition transition-colors duration-100">
                <Linkedin className="h-6"/>
            </a>
        </div>
    );
}