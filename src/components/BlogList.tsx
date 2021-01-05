import React from "react";
import Link from "gatsby-link";
import Card from "./Card";
import Button from "./Button";
import {motion} from "framer-motion";

const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function BlogList({title = 'Blog', data}) {
    return (
        <Card>
            <h2 className="title text-2xl">{title}</h2>
            <motion.div className="flex flex-col"
                        variants={container}
                        initial="hidden"
                        animate="visible">
                {data.nodes.map(({remark}, index) => (
                    <motion.div key={index} variants={item} className="flex">
                        <Link to={remark.frontmatter.slug}
                              className="rounded mt-3 p-2 hover:bg-gray-800 focus:ring ring-blue-600">
                            <div className="flex flex-col md:flex-row justify-between md:items-center">
                                <div className="title text-lg mb-2 md:mb-0">
                                    {remark.frontmatter.title}
                                </div>
                                <div className="text-sm">
                                    {remark.frontmatter.tags.map((tag, index) => (
                                        <span key={index}
                                              className="bg-blue-800 text-white text-sm mr-1 rounded px-1">
                                        {tag}
                                    </span>
                                    ))}
                                    {remark.frontmatter.date}
                                </div>
                            </div>
                            <div className="truncate text-gray-500">{remark.excerpt}</div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            {data.pageInfo.hasNextPage &&
            <div className="flex justify-end mt-2">
                <Button to="/blog">
                    View all
                </Button>
            </div>}
        </Card>
    )
}