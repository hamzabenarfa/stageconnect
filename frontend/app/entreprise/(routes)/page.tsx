import InternCard from "../_component/InternCard";
import JobSummary from "../_component/JobSummary";
import RecentPositions from "../_component/RecentPositions";
import { items } from "../_const/interncard";
const Dashboard = () => {
  return (
    <div className="flex flex-row gap-4  h-full w-full ">
      <div className="flex flex-col gap-4 w-full ">
        <div className="flex flex-col md:flex-row gap-2 overflow-hidden">
          {items.map((item) => (
            <InternCard
              key={item.title}
              background={item.background}
              Firsticon={item.Firsticon}
              Secondicon={item.Secondicon}
              title={item.title}
              number={item.number}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center w-full md:flex-row gap-4 ">
          <JobSummary />
          <RecentPositions />
        </div>
      </div>
      <div className="bg-red-100 h-full w-full rounded-3xl"></div>
    </div>
  );
};

export default Dashboard;
