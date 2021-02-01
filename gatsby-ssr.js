exports.onRenderBody = ({setBodyAttributes}) => {
    setBodyAttributes({
        style: {
            backgroundColor: '#121212',
        },
        className: "text-reading bg-background",
    });
};