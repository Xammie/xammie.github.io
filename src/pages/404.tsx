import {Helmet} from "react-helmet";
import React from "react";
import Layout from "../components/Layout";
import Slanted from "../components/Slanted";

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <html lang="en"/>
                <meta charSet="utf-8"/>
                <title>Page not found</title>
            </Helmet>
            <div className="min-h-screen flex flex-col justify-center">
                <Slanted>
                    <div className="flex-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-normal py-3 z-10 overflow-visible">
                            Page not found
                        </h1>
                    </div>
                </Slanted>
            </div>
        </Layout>
    );
}
