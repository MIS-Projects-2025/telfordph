import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { motion } from "motion/react";

export default function Home() {
    return (
        <GuestLayout>
            <Head title="About Us" />
            <div className="px-[5%] py-16">
                <section className="">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2,
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="inline-block text-3xl font-bold md:text-4xl"
                            style={{ willChange: "opacity, transform" }}
                            data-morph
                        >
                            About Telford Philippines
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="inline-block mt-3"
                            style={{ willChange: "opacity, transform" }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quo quisquam necessitatibus obcaecati, odio
                            asperiores fuga blanditiis id explicabo dolore atque
                            magnam repellendus sit ducimus tempore nihil
                            mollitia velit consequatur nobis?
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.7,
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="inline-block mt-5"
                            style={{ willChange: "opacity, transform" }}
                        >
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <h4
                                        data-morph
                                        className="inline-block text-2xl font-bold"
                                    >
                                        Mission
                                    </h4>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Quo quisquam
                                        necessitatibus obcaecati, odio
                                        asperiores fuga blanditiis id explicabo
                                        dolore atque magnam repellendus sit
                                        ducimus tempore nihil mollitia velit
                                        consequatur nobis?
                                    </p>
                                </div>
                                <div>
                                    <h4
                                        data-morph
                                        className="inline-block text-2xl font-bold"
                                    >
                                        Vision
                                    </h4>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Quo quisquam
                                        necessitatibus obcaecati, odio
                                        asperiores fuga blanditiis id explicabo
                                        dolore atque magnam repellendus sit
                                        ducimus tempore nihil mollitia velit
                                        consequatur nobis?
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.7,
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="inline-block mt-5"
                            style={{ willChange: "opacity, transform" }}
                        >
                            <div>
                                <h4
                                    data-morph
                                    className="inline-block text-2xl font-bold"
                                >
                                    Core Values
                                </h4>
                                <p className="text-justify">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quo quisquam
                                    necessitatibus obcaecati, odio asperiores
                                    fuga blanditiis id explicabo dolore atque
                                    magnam repellendus sit ducimus tempore nihil
                                    mollitia velit consequatur nobis?
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.7,
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        className="inline-block mt-5"
                        style={{ willChange: "opacity, transform" }}
                    >
                        <div>
                            <h4
                                data-morph
                                className="inline-block text-2xl font-bold"
                            >
                                Community Relations
                            </h4>
                            <p className="text-justify">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quo quisquam necessitatibus
                                obcaecati, odio asperiores fuga blanditiis id
                                explicabo dolore atque magnam repellendus sit
                                ducimus tempore nihil mollitia velit consequatur
                                nobis?
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </GuestLayout>
    );
}
