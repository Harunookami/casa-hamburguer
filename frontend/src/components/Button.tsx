type ButtonType = {
    title: string;
    variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
    const buttonVariant = () => {
        if (variant === "default") {
            return "w-full border-2 border-[#C92A0E] bg-[#C92A0E] py-2 rounded-md text-white font-bold text-sm cursor-pointer"
        } else if (variant === "outline") {
            return "w-full border-2 border-[#C92A0E] bg-white py-2 rounded-md text-[#C92A0E] font-bold text-sm cursor-pointer"
        };
    };

    return (
        <button {...props} className={buttonVariant()}>
            {title}
        </button>
    );
};
export default Button; 