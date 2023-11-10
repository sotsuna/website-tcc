const Content = ({text, title, inverted = false}) => {

    const invertede = inverted ? "order-last" : " ";
    const classes = `h-screen w-full grid gap-x-8 gap-y-4 grid-cols-2 items-center px-8 ${invertede}`;

    return (
        <div>
            <div className={classes}>
                <div className="text-center">
                    <h1>
                        {title}
                    </h1>
                </div>
                <div>
                    <p className="text-center">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Content;