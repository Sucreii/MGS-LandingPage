import { FiArrowUpRight } from "react-icons/fi";

export default function ContactUsHome() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center overflow-hidden p-5 md:h-screen md:p-0">
            <div className="max-w-3xl text-center">
                <h1
                    className="
                    section-title
                    font-bold
                    "
                >
                    Move In. Plug In.
                </h1>
                <h1
                    className="
                    section-title
                    font-bold
                    "
                >
                    We’ll handle the rest.
                </h1>
                <h5
                    className="
                    text-sm
                    md:text-md
                    lg:text-lg 
                    font-bold 
                    text-[#B4E700]
                    "
                >
                    Make MGS your startup partner
                </h5>

            </div>
            <button className="h-15 md:h-20 bg-neutral-800 px-10 rounded-sm flex items-center justify-center">
                <div className="text-lg md:text-2xl font-extralight text-white">
                    Explore your Options
                </div>
                <FiArrowUpRight className="text-4xl text-white ml-2" />
            </button>
        </div>
    );
}
