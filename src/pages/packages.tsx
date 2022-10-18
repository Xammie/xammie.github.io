import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Header from '../components/Header';
import { ArrowDownTrayIcon, StarIcon } from '@heroicons/react/20/solid';

export default function Packages() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [stars, setStars] = useState(null);
    const [downloads, setDownloads] = useState(null);
    const [packages, setPackages] = useState([]);

    const fetchPackages = async () => {
        if (typeof window === 'undefined') {
            return;
        }

        try {
            const response = await fetch(
                'http://hoogenbosch-api.test/v1/packagist/xammie',
            );
            const data = await response.json();

            setStars(data.stars);
            setDownloads(data.downloads);
            setPackages(data.packages);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPackages();
    }, []);

    return (
        <Layout>
            <Seo />
            <Header />
            <Container>
                <main>
                    {loading && (
                        <div className="flex items-center justify-center py-16">
                            <svg
                                className="h-8 w-8 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                        </div>
                    )}
                    {!loading && !error && (
                        <div className="flex flex-col gap-5">
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="min-w-0 flex-1">
                                    <h2 className="text-2xl font-bold leading-7 text-gray-200 sm:truncate sm:text-3xl sm:tracking-tight">
                                        My open source packages
                                    </h2>
                                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                        <div className="mt-2 flex items-center text-sm text-gray-500">
                                            <StarIcon
                                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            {stars}
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500">
                                            <ArrowDownTrayIcon
                                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            {downloads}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                {packages.map((pkg, index) => (
                                    <a
                                        key={index}
                                        href={pkg.repo}
                                        target="_blank"
                                        className="flex flex-col justify-between gap-2 overflow-hidden rounded-xl bg-white p-5 shadow-md ring-blue-200 transition transition-colors duration-100 hover:bg-blue-100 focus:bg-blue-300 focus:ring dark:bg-surface dark:ring-blue-600 dark:hover:bg-gray-800 dark:focus:bg-blue-900 sm:flex-row"
                                        rel="noreferrer"
                                    >
                                        <div className="flex flex-shrink flex-col gap-1 overflow-hidden">
                                            <div className="text-lg font-bold leading-tight md:mb-0">
                                                {pkg.name}
                                            </div>
                                            <div className="truncate truncate text-gray-500 dark:text-gray-400">
                                                {pkg.description}
                                            </div>
                                        </div>
                                        <div className="flex flex-shrink-0 flex-wrap items-end gap-3 sm:flex-col sm:gap-1">
                                            <div className="flex items-center gap-1">
                                                {pkg.stars}
                                                <StarIcon className="h-4 w-4" />
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {pkg.downloads}
                                                <ArrowDownTrayIcon className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
                <Footer />
            </Container>
        </Layout>
    );
}
