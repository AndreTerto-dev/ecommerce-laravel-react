import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-blue-50 text-gray-700 text-sm"
        >
            {children}
        </Link>
    );
}
