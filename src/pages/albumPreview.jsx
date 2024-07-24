import Navigation from "../components/navigation";
import Header from "../components/header";
import MusicControl from "../components/musicControl";
import AlbumPreviewContent from "../components/albumPreviewContent";

export default function Dashboard() {
  return (
    <div className="flex text-primaryText_Light dark:text-primaryText_Dark min-h-screen bg-primaryBackground_Light dark:bg-primaryBackground_Dark">
      <Navigation />
      <div className="flex-grow">
        <div className="absolute top-[92px] left-[332px] right-[36px] ">
          <AlbumPreviewContent />
        </div>
        <Header />
        <MusicControl />
      </div>
    </div>
  );
}
