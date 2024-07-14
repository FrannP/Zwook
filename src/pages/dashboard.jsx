import Navigation from "../components/navigation";
import Header from "../components/header";
import MusicControl from "../components/musicControl";

export default function Dashboard() {
  return (
    <div className="flex text-primaryText_Dark absolute inset-0 bg-primaryBackground_Dark">
      <Navigation />
      <div className="flex-grow">
        <Header />
        <MusicControl/>

      </div>
      
    </div>
  );
}
