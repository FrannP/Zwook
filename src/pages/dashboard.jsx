import Navigation from "../components/navigation";
import Header from "../components/header";

export default function Dashboard() {
  return (
    <div className="flex text-primaryText_Dark absolute inset-0 bg-primaryBackground_Dark">
      <Navigation />
      <div className="flex-grow">
        <Header />
      </div>
    </div>
  );
}
