import Avatar from "./avatar";
import Bar from "./bar";
import shuffleIcon from "../assets/icons/musicControls/shuffleIcon.svg"
import prevIcon from "../assets/icons/musicControls/prevIcon.svg"
import playIcon from "../assets/icons/musicControls/playIcon.svg"
import nextIcon from "../assets/icons/musicControls/nextIcon.svg"
import repeatIcon from "../assets/icons/musicControls/repeatIcon.svg"
import VolumeSlider from "./volumeSlider";



const ControlButton = ({link, height, width}) => (
    <button className={`${height} ${width}`}>
        <img  src={link} alt="" />
    </button>
);

const Control = ({ songLength, currentLength }) => (
  <div className="h-full flex flex-col">


    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-center gap-[36px]">
        <ControlButton height={"h-[20px]"} width={"w-[20px]"} link={shuffleIcon}/>
        <ControlButton height={"h-[20px]"} width={"w-[20px]"} link={prevIcon}/>
        <ControlButton height={"h-[32px]"} width={"w-[32px]"} link={playIcon}/>
        <ControlButton height={"h-[20px]"} width={"w-[20px]"} link={nextIcon}/>
        <ControlButton height={"h-[20px]"} width={"w-[20px]"} link={repeatIcon}/>
      </div>

      <div className="w-[349px] flex items-center gap-[12px]">
        <div className="font-regular text-xsText text-primaryPlaceholderText_Dark">{currentLength}</div>
        <Bar
          height={"h-[3px]"}
          color="bg-primaryText_Dark"
          backgroundColor="bg-primaryLighterBorder_Dark"
          progress={"w-[83%]"}
        />
        <div className="font-regular text-xsText text-primaryPlaceholderText_Dark">{songLength}</div>
      </div>
    </div>
  </div>
);

export default function MusicControl() {
  return (
  <div className="fixed bottom-0 left-[296px] right-0 px-[36px] py-[12px] flex border-t-[1px] bg-secondaryBackground_Dark border-primaryBorder_Dark justify-between">
    <Avatar
      fontWeight="font-regular"
      textSize="text-mdText"
      mainText="Artist Song"
      bottomText="Artist Name"
      img="src\assets\dashboardImages\currentSongImage.svg"
      imgBorder="rounded-[4px] border-[1px] border-primaryLighterBorder_Dark"
      statusVisible={false}
      imgHeight="h-[48px]"
      imgWidth="w-[48px]"
    />
    <Control currentLength={"0:34"} songLength={"3:57"} />
    <VolumeSlider />
  </div>
  );
}
