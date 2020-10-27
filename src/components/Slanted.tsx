import React, {useEffect, useRef} from "react";
import {useWindowSize} from "@react-hook/window-size";

export default function Slanted({children}) {
    const rotated = useRef(null);
    const profile = useRef(null);

    useWindowSize();

    useEffect(() => {
        let angle = -Math.atan(rotated.current.offsetHeight / rotated.current.offsetWidth) * 180 / Math.PI;

        profile.current.style.transform = 'rotate(' + angle + 'deg)';
    });

    return (
        <div className="overflow-hidden">
            <div className="top-0 separator separator-top h-8 sm:h-12 md:h-16 lg:h-28 w-full bg-gray-900 z-0"
                 ref={rotated}/>
            <div className="bg-gray-900 z-10">
                <div className="flex justify-center z-10" ref={profile}>
                    {children}
                </div>
            </div>
            <div className="bottom-0 separator h-8 sm:h-12 md:h-16 lg:h-28 w-full bg-blue-600 z-0"/>
        </div>
    )
}