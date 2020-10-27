import React from "react"
import Layout from "../components/Layout";
import Header from "../components/Header";
import Slanted from "../components/Slanted";
import Profile from "../components/Profile";

export default function Home() {
    return (
        <Layout>
            <Header/>
            <div className="min-h-screen relative flex flex-col justify-center overflow-hidden">
                <Slanted>
                    <div className="flex flex-row py-8 px-4 justify-center">
                        <Profile/>
                        <div
                            className="ml-4 sm:ml-8 md:ml-12 flex-center flex-col leading-normal text-center sm:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none mb-2 md:mb-3 z-10 overflow-visible">
                                Hey, I'm Max
                            </h1>
                            <div className="text-gray-100 text-lg lg:text-2xl">
                                Fullstack Developer
                            </div>
                        </div>
                    </div>
                </Slanted>
            </div>
        </Layout>
    );
}
