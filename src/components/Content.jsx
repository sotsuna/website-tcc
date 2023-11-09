const Content = ({text, title, inverted = false}) => {
    const invertede = inverted ? "flex-row-reverse" : "flex-row";
    const classes = `w-screen h-screen flex items-center gap-8 ${invertede}`
    
    return (
    <div>
        <div className={classes}>
            <div className="">
                <h1>
                    {title}
                </h1>
            </div>
            <div>
                <p>
                    {text}
                </p>
            </div>
        </div>
    </div>)
};

export default Content;