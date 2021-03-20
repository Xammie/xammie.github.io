exports.onRenderBody = ({setBodyAttributes}) => {
    setBodyAttributes({
        className: "bg-gray-100 text-background dark:text-reading dark:bg-background",
    });
};