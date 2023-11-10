const Content = ({text, title, inverted = false}) => {

    const invertede = inverted ? "order-last" : " ";
    const classes = `text-center ${invertede}`;

    return (
        <div>
            <div className="h-screen w-full grid gap-x-8 gap-y-4 grid-cols-2 items-center px-8">
                <div className={classes}>
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        {title}
                    </h1>
                </div>
                <div>
                    <p className={classes}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Content;