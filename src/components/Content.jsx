const Content = (text, title, inverted = false) => (
    <div>
        <div className="w-screen h-screen flex items-center gap-8 {inverted : flex-row-reverse ? flex-row }">
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
    </div>
);

export default Content;
