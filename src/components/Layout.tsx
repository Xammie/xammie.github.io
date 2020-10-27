import React from "react";
import {Helmet} from "react-helmet";

export default function Layout({children}) {
    return (
            <div className="min-h-screen bg-blue-600 text-white relative">
                <Helmet>
                    <html lang="en"/>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="Fullstack developer from the Netherlands"/>
                    <title>Max</title>
                </Helmet>
                {children}
            </div>
    );
}