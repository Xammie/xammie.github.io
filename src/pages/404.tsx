import {Helmet} from "react-helmet";
import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../components/Button";

export default function () {
    return (
        <Layout>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <Container className="flex-center flex-col">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl py-3 z-10 overflow-visible">
                    Page not found
                </h1>
                <Button to="/">
                    Back to home
                </Button>
            </Container>
        </Layout>
    );
}
