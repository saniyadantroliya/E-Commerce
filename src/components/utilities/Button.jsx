import { IoArrowForward } from "react-icons/io5";

/**
 * Reusable Button Component
 *
 * @param {ReactNode} children - The button label/content
 * @param {string} btnStyle - Button type ("submit", "button", etc.)
 * @param {string} variant - Style variant ("primary", more can be added)
 * @param {boolean} isIconShow - Controls visibility of the arrow icon
 */
const Button = ({
    children,
    btnStyle = "submit",
    variant = "primary",
    isIconShow = true,
}) => {
    // Base styles for all buttons
    const baseStyle =
        "h-[55px] text-[17px] px-[2px] py-2 rounded-full flex items-center justify-center cursor-pointer";

    // Define variants (add more as needed)
    const colorVariants = {
        primary: "bg-coral text-white", // Coral background, white text
        // Example:
        // secondary: "bg-gray-200 text-black",
    };

    return (
        <button
            type={btnStyle}
            className={`${baseStyle} ${colorVariants[variant] || ""}`}
        >
            {/* Optional left icon inside circular white background */}
            {isIconShow && (
                <div className="h-[52px] w-[52px] bg-white text-coral rounded-full flex items-center justify-center">
                    <IoArrowForward size={25} />
                </div>
            )}

            {/* Button text/content */}
            <span className="px-[40px]">{children}</span>
        </button>
    );
};

export { Button };
