import CountUp from "@/Components/specifics/CountUp";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { motion } from "motion/react";

export default function Home({ images }) {
    return (
        <GuestLayout>
            <Head title="Home" />

            <section className="relative min-h-screen overflow-hidden">
                {/* Background Image */}
                <img
                    src="/images/tspi.jpg"
                    alt="Hero Background"
                    className="absolute inset-0 object-cover w-full h-full"
                    loading="eager"
                    fetchpriority="high"
                />

                {/* Overlay */}
                <div className="absolute inset-0 z-10 bg-black/50" />

                {/* Content */}
                <div className="relative z-20 flex items-center justify-center min-h-screen px-4 text-center text-white">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="text-4xl font-bold md:text-6xl"
                            style={{ willChange: "opacity, transform" }}
                        >
                            Telford Philippines
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.4,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="text-lg"
                            style={{ willChange: "opacity, transform" }}
                        >
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="space-x-2"
                            style={{ willChange: "opacity, transform" }}
                        >
                            <button className="px-4 py-2 text-white bg-blue-600 border border-blue-500 rounded-md btn btn-ghost">
                                Our Services
                            </button>
                            <button className="px-4 py-2 text-white bg-blue-600 border border-blue-500 rounded-md btn btn-ghost">
                                Request a Quote
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="flex flex-col flex-wrap justify-around px-10 md:flex-row">
                    {[...Array(5)].map((_, index) => (
                        <div
                            data-morph
                            key={index}
                            className="flex flex-col items-center"
                        >
                            <CountUp
                                from={0}
                                to={999}
                                duration={1000}
                                suffix="+"
                                className="text-[45pt] font-bold text-[#de1235]"
                            />
                            <p>Lorem Ipsum Dolor</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 ">
                <div className="flex flex-col flex-wrap justify-center gap-5 md:flex-row">
                    <div className="max-w-[50%]">
                        <p className="p-0 mb-4 text-lg font-medium leading-none text-gray-800">
                            Sit Amet Consectetur
                        </p>
                        <motion.button
                            initial={{ y: -10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <h2
                                data-morph
                                className="p-0 mb-4 text-3xl font-bold leading-none text-gray-800"
                            >
                                Lorem Ipsum Dolor
                            </h2>
                        </motion.button>
                        <p data-morph className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi commodi maxime, tempore, numquam
                            mollitia eius inventore hic reprehenderit
                            dignissimos amet doloribus temporibus eos molestiae
                            quidem enim, velit sit non blanditiis.
                        </p>

                        <div className="">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-5 mb-5"
                                >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1, 1.2, 1],
                                            rotate: [0, 0, 180, 180, 0],
                                            borderRadius: [
                                                "10%",
                                                "0%",
                                                "50%",
                                                "50%",
                                                "0%",
                                            ],
                                        }}
                                        transition={{
                                            duration: 3,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                        style={{
                                            width: 15,
                                            height: 15,
                                            backgroundColor: "#3b65af",
                                            borderRadius: 5,
                                        }}
                                        className="mt-1"
                                    />
                                    <p className="max-w-[450px]">
                                        <strong>
                                            Lorem, ipsum dolor sit amet
                                        </strong>{" "}
                                        consectetur adipisicing elit. Sequi
                                        commodi maxime, tempore.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[30%] bg-gray-400"></div>
                </div>
            </section>

            <section className="py-16">
                <div className="px-6 mx-auto text-center max-w-7xl">
                    <h2
                        data-morph
                        className="inline-block mb-4 text-3xl font-bold text-gray-800 "
                    >
                        Our Clients
                    </h2>
                    <p className="mb-10">
                        Trusted by innovative companies across industries
                    </p>

                    <div className="grid items-center justify-center grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
                        {images.map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center transition opacity-80 hover:opacity-100"
                            >
                                <img
                                    data-morph
                                    src={logo}
                                    alt={`Client ${idx + 1}`}
                                    className="object-contain h-12 transition grayscale hover:grayscale-0 mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
