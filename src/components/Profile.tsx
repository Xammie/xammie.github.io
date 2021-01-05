import React from "react"
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import {motion} from "framer-motion";

export default function Profile({...props}: React.AllHTMLAttributes<any> | any) {
    const data = useStaticQuery(graphql`
        query {
            profile: file(relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300, maxHeight: 300) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <motion.div {...props}
                    initial={{rotate: -45, scale: 0}}
                    animate={{rotate: 0, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
            <Img alt="Max Hoogenbosch"
                 title="This is me :)"
                 className="rounded-full shadow-md"
                 fluid={data.profile.childImageSharp.fluid}/>
        </motion.div>
    );
}