import { IoArrowForward } from "react-icons/io5";

const Button = ({ children, btnStyle = "button", variant = "primary",  isIconShow = true }) => {
    const baseStyle = "h-[55px] text-[17px]  px-[2px] py-2 rounded-full flex items-center justify-center ";

    const colorVariants = {
        primary: "bg-coral text-white",
    };


    return (
        <button type={btnStyle} className={baseStyle + " " + colorVariants[variant]}>

            {isIconShow && <div className="h-[52px] w-[52px] bg-white text-coral rounded-full justify-center flex items-center"> <IoArrowForward
             size={25} /> </div>}

            <span className="px-[40px]">{children}</span>
        </button>
    );
};

export {Button}