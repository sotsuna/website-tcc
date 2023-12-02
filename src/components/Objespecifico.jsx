import "../App.css";
import text from "./text.json";

const Objespecifico = ({ id, title, inverted = false }) => {
    var myObj = text[4];
    var myArray = [myObj];
    const invertede = inverted ? "order-last" : " ";
    const classes = `fade-in-left ${invertede}`;

    return (
        <div
            className="h-screen w-full grid gap-x-8 gap-y-4 grid-cols-2 items-center px-8 text-dark-green-gray will-change-auto whitespace-pre-line"
            id={id}
        >
            <div className={classes}>
                <h1 className="fade-in-left text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    {title}
                </h1>
            </div>
            <div>
                <ul className={classes}>
                    {myArray.map((item) => (
                        <li >
                            {Object.entries(item).map(([key, value],i) => (
                                <div key={i}>
                                    {key === 'content' ? (
                                        // Se a chave for 'content', renderize as propriedades do objeto aninhado como itens da lista não ordenada
                                        <ul>
                                            {Object.entries(value).map(([nestedKey, nestedValue]) => (
                                                <li>{`${nestedKey}: ${nestedValue}`}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        null
                                    )}
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Objespecifico;
