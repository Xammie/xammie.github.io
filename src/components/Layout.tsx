import React from "react";
import {Helmet} from "react-helmet";

export default function Layout({children}) {
    return (
        <div className="min-h-screen bg-background relative">
            <Helmet defaultTitle="Max Hoogenbosch"
                    titleTemplate="%s - Max Hoogenbosch">
                <html lang="en"/>
                <meta charSet="utf-8"/>
                <meta name="description" content="Full Stack Developer at Enrise"/>
                <meta name="theme-color" content="#1a202c"/>
            </Helmet>
            {children}
        </div>
    );
}