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
        lien:"/gestion"
    }, 
    {
        icon: Users,
        title:"Candidates",
        lien:"/Candidates"
    },
    {
        icon: Calendar,
        title:"Calendar",
        lien:"/Calendar"
    }
    


];