// eslint-disable-next-line react/prop-types
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} rounded-full` : 'bg-coral-red rounded-full text-white border-x-coral-red'}
    ${fullWidth ? 'w-full' : ''}`}
        >
            {label}
            {iconURL && <img
                src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    );
};

export default Button;
