import Card from "./Card";
import React from "react";
import Img from "gatsby-image";

export default function Projects({items}) {
    return (
        <Card>
            <h2 className="font-bold text-2xl mb-3">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                {items.map((item, index) => (
                    <div key={index}
                         className="relative bg-gray-700 rounded-lg p-3">
                        <Img className="rounded-lg"
                             fluid={item.image.childImageSharp.fluid}/>
                        <div className="font-bold bg-white text-black text-xl absolute bottom-0 left-0 m-5 p-1 shadow-lg">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}