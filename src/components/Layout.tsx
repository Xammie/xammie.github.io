import React from "react";
import {Helmet} from "react-helmet";
import ThemeToggle from "./ThemeToggle";

export default function Layout({children}) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-background relative"
             style={{minHeight: '-webkit-fill-available'}}>
            <Helmet defaultTitle="Max Hoogenbosch"
                    titleTemplate="%s - Max Hoogenbosch">
                <html lang="en"/>
                <meta charSet="utf-8"/>
                <meta name="description" content="Full Stack Developer"/>
                <meta name="theme-color" content="#1a202c"/>
            </Helmet>
            {children}
            <ThemeToggle/>
        </div>
    );
}