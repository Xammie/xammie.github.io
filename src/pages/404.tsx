import {Helmet} from "react-helmet";
import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function () {
    return (
        <Layout>
            <Helmet>
                <title>Page not found</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Container className="flex flex-col">
                <div className="flex-center flex-col flex-grow">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl py-3 z-10 overflow-visible">
                        Page not found
                    </h1>
                </div>
                <Footer/>
            </Container>
        </Layout>
    );
}
