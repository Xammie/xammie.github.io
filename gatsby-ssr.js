exports.onRenderBody = ({setBodyAttributes}) => {
    setBodyAttributes({
        style: {
            backgroundColor: 'rgb(37, 99, 235)',
        },
        className: "text-white bg-blue-600",
    });
};