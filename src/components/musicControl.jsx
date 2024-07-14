import Avatar from "./avatar"


const Control = ({songLength,currentLegth}) =>(
    <div className="h-full w-[153px]">
        <div>
            
        </div>
    </div>
);

export default function MusicControl() {
    return (
      <div className="px-[36px] py-[12px] flex border-t-[1px] bg-secondaryBackground_Dark  border-primaryBorder_Dark justify-between">
            <Avatar fontWeight="font-regular" textSize="text-md" mainText="Artist Song" bottomText="Artist  Name" img="src\assets\dashboardImages\currentSongImage.svg" imgBorder={"rounded-[4px] border-[1px] border-primaryLighterBorder_Dark"} statusVisible={false}/>
            <Control/>
      </div>
    );
  }
  