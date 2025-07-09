import FooterGuest from "@/Components/guest/FooterGuest";
import NavBarGuest from "@/Components/guest/NavBarGuest";
import Drag from "@/Components/guest/Drag";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen ">
            <Drag />
            <NavBarGuest />

            <div className="p-0">{children}</div>

            <FooterGuest />
        </div>
    );
}
