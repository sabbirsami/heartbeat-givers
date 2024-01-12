import Link from "next/link";

const Banner = () => {
    return (
        <section className="border-b-4 border-dark">
            <div className="lg:h-[88vh] md:h-[70vh] h-[65vh] container mx-auto hero-bg  ">
                <div className="flex justify-center items-center h-full md:px-6 px-3">
                    <div className="lg:pb-0 pb-16 text-center">
                        <div className="">
                            <h2 className="xl:text-8xl lg:text-6xl md:text-6xl text-4xl font-bold">
                                Saves Lives.
                            </h2>
                            <h2 className="xl:text-8xl md:text-7xl text-4xl font-bold text-primary">
                                Blood Donation
                            </h2>
                        </div>

                        <div className="py-6">
                            <p className="">
                                Be a lifesaver with Heartbeat Givers. Give the
                                gift of life by donating blood. <br /> Join our
                                community of heroes today!
                            </p>
                        </div>
                        <div className="space-x-3">
                            <Link
                                href={"/donate"}
                                className="md:px-8 px-5 md:py-3 py-2 md:text-base text-sm border border-primary bg-primary rounded-full text-secondary md:font-semibold"
                            >
                                Donate
                            </Link>
                            <Link
                                href={"/donate"}
                                className="md:px-8 px-5 md:py-3 py-2 md:text-base text-sm border border-primary rounded-full text-dark md:font-semibold"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
