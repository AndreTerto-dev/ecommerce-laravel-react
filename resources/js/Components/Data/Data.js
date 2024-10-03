import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilLabel,
    UilBookmark,
    UilShield,
} from '@iconscout/react-unicons';

export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'DashBoard',
        route: '/admin/dashboard',
    },
    {
        icon: UilPackage,
        heading: 'Products',
        route: '/admin/products',
    },
    {
        icon: UilClipboardAlt,
        heading: 'Orders',
        route: '/admin/orders',
    },
    {
        icon: UilBookmark,
        heading: 'Categories',
        route: '/admin/category',
    },
    {
        icon: UilUsersAlt,
        heading: 'Customers',
        route: '/admin/customers',
    },
    {
        icon: UilLabel,
        heading: 'Brands',
        route: '/admin/brand',
    },
    {
        icon: UilShield,
        heading: 'Teams',
        route: '/admin/team',
    },
    {
        icon: UilChart,
        heading: 'Analytics',
        route: '/admin/analytics',
    },
];
