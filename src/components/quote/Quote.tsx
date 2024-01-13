import { LiaQuoteRightSolid } from "react-icons/lia";
import { CgQuote } from "react-icons/cg";
import { IoRemoveOutline } from "react-icons/io5";

// // Import google font
// import { Sacramento } from "next/font/google";
// const bodoniModa = Sacramento({
//     weight: [400],
//     subsets: ["latin"],
//     display: "swap",
// });

const Quote = () => {
    return (
        <section className="container mx-auto xl:my-32 my-20 text-center flex justify-center items-center md:px-6 px-3">
            <div className="">
                <LiaQuoteRightSolid className="md:text-8xl text-5xl rotate-180 mx-auto md:mb-6 mb-3 text-primary" />
                <h2 className="xl:text-5xl md:text-4xl text-2xl font-semibold italic  md:mb-6 mb-3 ">
                    <CgQuote className="inline" />
                    Every drop of blood is a lifeline for someone in need.
                    Donate today and be the hero someone is waiting for.
                    <CgQuote className="inline" />
                </h2>

                <h1 className="text-primary xl:text-base text-xs">
                    <IoRemoveOutline className="inline" /> Sabbir Mohammad Sami
                </h1>
            </div>
        </section>
    );
};

export default Quote;
