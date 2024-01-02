
import { Hourglass, CheckSquare, Home } from "lucide-react";

export const routes = [
    {
        icon: Home,
        label: "Dashboard",
        href: "/student"

    },
    {
        icon: Hourglass,
        label: "Pending internship ",
        href: "/student/pending"
    },
    {
        icon: CheckSquare,
        label: "Accepted internship",
        href: "/student/accepted"
    },

];
