import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-950 text-xs " +
                        (link.active ? "bg-white/80 " : " ") +
                        (!link.url ? "!text-gray-700 cursor-not-allowed " : "hover:bg-white/70 ")

                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}></Link>
            ))}
        </nav>
    );
}