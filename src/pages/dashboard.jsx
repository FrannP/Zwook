import Navigation from "../components/navigation";
import Header from "../components/header";
import MusicControl from "../components/musicControl";
import DashboardContent from "../components/dashboardContent";

export default function Dashboard() {
  return (
    <div className="flex text-primaryText_Dark absolute inset-0 bg-primaryBackground_Dark">
      <Navigation />
      <div className="flex-grow">
        <Header />
        <DashboardContent />
        <MusicControl />
      </div>
    </div>
  );
}
