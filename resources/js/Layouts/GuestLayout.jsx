import FooterGuest from "@/Components/guest/FooterGuest";
import NavBarGuest from "@/Components/guest/NavBarGuest";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen ">
            <NavBarGuest />

            <div className="p-0">{children}</div>

            <FooterGuest />
        </div>
    );
}
