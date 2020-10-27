import React from "react"
import Img from "gatsby-image";
import {motion} from "framer-motion";
import {graphql, useStaticQuery} from "gatsby";

export default function Profile() {
    const data = useStaticQuery(graphql`
        query {
            profile: file(relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
            <motion.div whileHover={{scale: 1.1, rotate: 8}}>
                <Img alt="Max"
                     title="This is me :)"
                     className="h-32 w-32 z-30 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full shadow-md"
                     fluid={data?.profile?.childImageSharp?.fluid}/>
            </motion.div>
    );
}