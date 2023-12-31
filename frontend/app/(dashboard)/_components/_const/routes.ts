import {  Layout,TrendingUp, User, PackageCheck } from "lucide-react";

export const routes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/admin"
    },
    {
        icon: TrendingUp,
        label: "Gestion entreprise",
        href: "/admin/gestion-entreprise"
    },
    {
        icon: User,
        label: "Gestion users",
        href: "/admin/user"
    },

    {
        icon: PackageCheck,
        label: "gestion offres ",
        href: "/admin/gestion-offres"
    },
    {
        icon: PackageCheck,
        label: "demande-inscri ",
        href: "/admin/demande-inscri"
    },
];
