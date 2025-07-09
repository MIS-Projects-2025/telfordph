import CountUp from "@/Components/specifics/CountUp";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <GuestLayout>
            <Head title="About Us" />
            <section
                className="min-h-screen hero"
                style={{
                    backgroundImage:
                        // "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                        "url(https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/485625711_122095664138817585_1654455605698016043_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qa7_nKBhUNcQ7kNvwFpxYwk&_nc_oc=Adl7Q2I6rGRj2P34M0CP3mljVlPMERjdrse6hB8f6lgtfWndEW_6IcMib8HKSKQoMI4&_nc_zt=23&_nc_ht=scontent.fceb1-2.fna&_nc_gid=KnJY3NW2NXI2PM4vV5XaoA&oh=00_AfRfPkJQXKH0MAubC6MB9evORhvrehWJQrY9LF0NsYSOog&oe=68729052)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-6xl font-bold text-white">
                            Telford Philippines
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>

                        <div className="space-x-2">
                            <button className="btn btn-ghost px-3 py-1 rounded-md bg-blue-600 text-white border-[1px] border-blue-500">
                                Our Services
                            </button>
                            <button className="btn btn-ghost px-3 py-1 rounded-md bg-blue-600 text-white border-[1px] border-blue-500">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="flex flex-col flex-wrap justify-around px-10 md:flex-row">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
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
        </GuestLayout>
    );
}
