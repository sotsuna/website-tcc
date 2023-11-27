
import '../App.css';
import './text.json'

const Objespecifico = ({ title, text, id, inverted }) => {

    const invertede = inverted ? "order-last" : " ";
    const classes = `text-center fade-in-left ${invertede}`;

    return (

        <div className="h-screen w-full grid gap-x-8 gap-y-4 grid-cols-2 items-center px-8 text-dark-green-gray will-change-auto whitespace-pre-line" id={id}>
            <div className={classes}>
                <h1 className="fade-in-left text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    {title}
                </h1>
            </div>
            <div>
                <ul className={classes}>
                    <li>{text}</li>
                </ul>
            </div>
        </div>
    )
};

export default Objespecifico;