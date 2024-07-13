import { Link } from "react-router-dom";
import HouseIcon from "../assets/icons/house.svg";
import lightningIcon from "../assets/icons/lightningIcon.svg";
import settingsIcon from "../assets/icons/settingsIcon.svg";
import deviceIcon from "../assets/icons/deviceIcon.svg";
import playListIcon from "../assets/icons/playlistIcon.svg";
import albumIcon from "../assets/icons/albumIcon.svg";
import artistsIcon from "../assets/icons/artistsIcon.svg";
import stationsIcon from "../assets/icons/stationsIcon.svg";
import podcastsIcon from "../assets/icons/podcastsIcon.svg";

const NavItem = ({ icon, label, link, alert }) => (
  <Link to={link} className="w-full hover:bg-primaryActiveSurface_dark transition duration-500 ease-in-out rounded-[8px]">
    <li className="font-medium text-md flex flex-row justify-between w-full px-[12px] py-[8px]">
      <div className="flex flex-row gap-[12px]">
        <img src={icon} alt={label} />
        <div className="flex-grow">{label}</div>
      </div>
      {alert && (
        <div className="rounded-[360px] bg-warningSurface_Dark">
          <p className="text-darkText_Dark text-xs font-medium px-[8px] py-[4px]">
            {alert}
          </p>
        </div>
      )}
    </li>
  </Link>
);

const Bar = ({ color, backgroundColor, progress }) => (
    <div className={`h-[8px] w-full rounded-[360px] ${backgroundColor}`}>
      <div
        className="h-full rounded-[360px]"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );

const PlanAlert = () =>(
    <div className="p-[16px] rounded-[16px] border-solid border-[1px] border-primaryBorder_Dark w-full flex flex-col gap-[20px]">
        <div className="flex  items-center gap-[12px]">
            <img src="src\assets\icons\premiumIcon.svg" alt="" />
            <h3 className="font-medium text-lg">Update Premium</h3>
        </div>

        <p className="font-regular text-md text-primaryPlaceholderText_Light">
            Your Premium account is coming to an end. Please update your credit card information.
        </p>

        <Bar color="#EFCC44" backgroundColor="bg-primaryActiveSurface_dark" progress={83} />
        <div className="flex gap-[12px]">
            <button className="font-regular text-md py-[8px] hover:bg-primaryActiveSurface_dark transition duration-500 ease-in-out rounded-[8px]">Dismiss</button>
            <button className="font-regular text-md text-warningText_Dark">Upgrade Plan</button>
        </div>
    </div>
);

export default function Navigation() {
  return (
    <div className="w-[296px] h-full flex flex-col justify-between bg-secondaryBackground_Dark p-[24px]">
      <div className="flex flex-col items-center gap-[24px] justify-center">
        <img
          className="w-[248px] h-[76px]"
          src="src/assets/logo.svg"
          alt="Logo"
        />
        <ul className="w-full flex flex-col gap-[16px]">
          <NavItem icon={HouseIcon} label="House" link="/dashboard" />
          <NavItem icon={deviceIcon} label="Devices" link="/dashboard" alert="10" />
          <NavItem icon={lightningIcon} label="Subscriptions" link="/dashboard" />
          <NavItem icon={settingsIcon} label="Settings" link="/dashboard" />
          <NavItem icon={playListIcon} label="Playlists" link="/dashboard" />
          <NavItem icon={albumIcon} label="Albums" link="/dashboard" />
          <NavItem icon={artistsIcon} label="Artists" link="/dashboard" />
          <NavItem icon={stationsIcon} label="Stations" link="/dashboard" />
          <NavItem icon={podcastsIcon} label="Podcasts" link="/dashboard" alert="Add New" />
        </ul>
      </div>
      <div>
        <PlanAlert/>
      </div>
    </div>
  );
}
