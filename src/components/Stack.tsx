import React from "react";
import Card from "./Card";
import Php from "../img/php.svg";
import Laravel from "../img/laravel.svg";
import ReactIcon from "../img/react-icon.svg";

export default function Stack() {
    return (
        <Card>
            <div className="leading-relaxed text-lg">
                I'm a fullstack developer from the Netherlands working at Enrise.
            </div>
            <h2 className="title text-2xl mb-3">
                I enjoy working with
            </h2>
            <div className="grid grid-cols-4 gap-3 md:gap-5">
                <div className="flex-center flex-col">
                    <Php className="w-16 h-16" color="#767ab3"/>
                    PHP
                </div>
                <div className="flex-center flex-col">
                    <Laravel className="w-16 h-16" color="#FF2D20"/>
                    Laravel
                </div>
                <div className="flex-center flex-col">
                    <ReactIcon className="w-16 h-16" color="#61dafb"/>
                    React
                </div>
                <div className="flex-center flex-col">
                    <ReactIcon className="w-16 h-16" color="#61dafb"/>
                    React Native
                </div>
            </div>
        </Card>
    )
}