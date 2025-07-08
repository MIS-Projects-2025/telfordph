import GuestLayout from "@/Layouts/GuestLayout";

export default function Home() {
    return (
        <GuestLayout>
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
                            <button className="btn bg-blue-600 text-white border-[1px] border-blue-500">
                                Our Services
                            </button>
                            <button className="btn bg-blue-600 text-white border-[1px] border-blue-500">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="px-6 mx-auto text-center max-w-7xl">
                    <h2 className="mb-4 text-3xl font-bold text-gray-800">
                        Our Clients
                    </h2>
                    <p className="mb-10 text-gray-500">
                        Trusted by innovative companies across industries
                    </p>

                    <div className="grid items-center justify-center grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
                        {[
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                            `https://img.icons8.com/fluent/512/node-js.png`,
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                            `https://img.icons8.com/fluent/512/node-js.png`,
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                            `https://img.icons8.com/fluent/512/node-js.png`,
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                            `https://img.icons8.com/fluent/512/node-js.png`,
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                            `https://img.icons8.com/fluent/512/node-js.png`,
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                            `https://img.icons8.com/fluent/512/node-js.png`,
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                            `https://img.icons8.com/fluent/512/node-js.png`,
                            `https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png`,
                        ].map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center transition opacity-80 hover:opacity-100"
                            >
                                <img
                                    src={logo}
                                    alt={`Client ${idx + 1}`}
                                    className="object-contain h-12 transition grayscale hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
