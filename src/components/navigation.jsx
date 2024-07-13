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
  <Link to={link} className="w-full">
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

export default function Navigation() {
  return (
    <div className="w-[248px] h-full bg-secondaryBackground_Dark p-[24px]">
      <div className="flex flex-col items-center gap-[24px] justify-center">
        <img
          className="w-[186.63px] h-[52px]"
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
    </div>
  );
}
