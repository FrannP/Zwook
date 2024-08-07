import Navigation from "../components/navigation";
import Header from "../components/header";
import MusicControl from "../components/musicControl";
import DashboardContent from "../components/dashboardContent";

export default function Dashboard() {
  return (
    <div className="flex text-primaryText_Dark min-h-screen bg-primaryBackground_Light dark:bg-primaryBackground_Dark">
      <Navigation />
      <div className="flex-grow">
        <div className="absolute top-[92px] left-[332px] right-[36px] ">
          <DashboardContent />
        </div>
        <Header />
        <MusicControl />
      </div>
    </div>
  );
}
