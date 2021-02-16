import React from "react"
import {motion} from "framer-motion";

export default function Profile({image, ...props}: React.AllHTMLAttributes<any> | any) {
    return (
        <motion.div {...props}
                    initial={{rotate: -45, scale: 0}}
                    animate={{rotate: 0, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
            <div className="rounded-full shadow-md overflow-hidden">
                {image}
            </div>
        </motion.div>
    );
}