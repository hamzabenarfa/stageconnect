import { Briefcase, Calendar, LayoutDashboard, Users } from "lucide-react";

export const routes = [
    {
       icon: LayoutDashboard,
       title:"Dashboard",
       lien:"/entreprise"
    },
    {
        icon: Briefcase,
        title:"Postuler",
        lien:"/entreprise/postuler"
    }, 
    {
        icon: Users,
        title:"Candidates",
        lien:"/entreprise/candidates"
    },
    // {
    //     icon: Calendar,
    //     title:"Calendar",
    //     lien:"/Calendar"
    // }
    


];