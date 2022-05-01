import { Helmet } from 'react-helmet';
import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';

export default function Page404() {
    return (
        <Layout>
            <Helmet>
                <title>Page not found</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Container>
                <div className="flex-center flex-grow flex-col">
                    <h1 className="z-10 overflow-visible py-3 text-4xl font-bold sm:text-5xl md:text-6xl">
                        Page not found
                    </h1>
                </div>
            </Container>
        </Layout>
    );
}
