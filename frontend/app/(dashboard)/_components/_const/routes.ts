import { Compass, Layout,List,BarChart,TrendingUp,Bell, User, CheckSquare, PenSquare, PackageCheck, AlertCircle, AlertTriangle, Settings, BarChart4 } from "lucide-react";

export const routes = [
    {
       icon: Layout,
       label:"Dashboard",
       href:"/admin"
    },
    {
        icon: TrendingUp,
        label:"Gestion entreprise",
        href:"/gestion-entreprise"
    }, 
    {
        icon: User,
        label:"Gestion users",
        href:"/user"
    },

    {
        icon: PackageCheck,
        label:"gestion offres ",
        href:"/gestion-offres"
    },
 
  
];
