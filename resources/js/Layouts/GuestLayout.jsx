import FooterGuest from "@/Components/guest/FooterGuest";
import NavBarGuest from "@/Components/guest/NavBarGuest";
import Drag from "@/Components/guest/Drag";

export default function GuestLayout({ children }) {
    return (
        <div className="relative min-h-screen">
            <Drag />
            <NavBarGuest />

            <div className="min-h-[90vh] p-0">{children}</div>

            <FooterGuest />
        </div>
    );
}
