import InternCard from "../_component/InternCard";
import { items } from "../_const/interncard";
const Dashboard = () => {
    return ( 
        <div className="p-4 h-full w-full "> 
        <div className="flex flex-col md:flex-row gap-2 overflow-hidden">
        {
            items.map((item)=>(
                <InternCard
                key={item.title}
                background={item.background}
                Firsticon={item.Firsticon}
                Secondicon={item.Secondicon}
                title={item.title}
                number={item.number}
                />
            ))
           
        }
          
        </div>

        </div>
     );
}
 
export default Dashboard;