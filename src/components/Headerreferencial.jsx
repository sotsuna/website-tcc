import '../App.css'

const Headerreferencial = ({id}) => {
    return (
 
        <div className="h-40 w-full grid gap-x-8 gap-y-4items-center px-8 text-dark-green-gray will-change-auto whitespace-pre-line" id={id}>
            <div>
                <h1 className="fade-in-left text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Referencial Teórico
                </h1>
            </div>
        </div>
    )
};

export default Headerreferencial;