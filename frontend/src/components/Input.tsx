const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className="bg-white w-87.5 h-8.75 py-2.5 rounded-md text-xs px-2 outline-none text-[#32343E] placeholder-[#32343E]"

        />
    )
}
export default Input;