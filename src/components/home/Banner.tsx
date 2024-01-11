import Link from "next/link";

const Banner = () => {
    return (
        <section className="border-b-4 border-dark">
            <div className="h-[88vh] container mx-auto hero-bg ">
                <div className="flex justify-center items-center h-full">
                    <div className="text-center">
                        <div className="">
                            <h2 className="text-8xl font-bold">Saves Lives.</h2>
                            <h2 className="text-8xl font-bold text-primary">
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
                                className="px-8 py-3 bg-primary rounded-full text-secondary font-semibold"
                            >
                                Donate
                            </Link>
                            <Link
                                href={"/donate"}
                                className="px-8 py-3 border border-primary rounded-full text-dark font-semibold"
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
