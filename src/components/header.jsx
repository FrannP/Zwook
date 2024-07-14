import TextInput from "./textInput";
import SearchIcon from "../assets/icons/searchIcon.svg"
import Avatar from "./avatar"



const ProfileHeaderOptions = () => (
        <div className="flex justify-center items-center gap-[20px]">
            <div className="flex justify-center items-center">
                <button>
                    <img src="src\assets\icons\headerButtonOne.svg" alt="" />
                </button>
                <button>
                    <img src="src\assets\icons\headerButtonTwo.svg" alt="" />
                </button>
            </div>

            <div className="flex gap-[12px]">
                <Avatar fontWeight="font-bold" textSize="text-lg" mainText="Albert Flores" bottomText="albert@flores.com" img="src/assets/avatarImage.png"  statusVisible={true}/>
                <button>
                    <img src="src\assets\icons\headerButtonThree.svg" alt="" />
                </button>
            </div>
        </div>
  );

export default function Header() {
    return (
        <header className="fixed  top-0 left-[296px] right-0 px-[24px] py-[12px] flex border-b-[1px] bg-primaryBackground_Dark  border-primaryLighterBorder_Dark justify-between">
            <div className="w-[320px]">
                <TextInput
                    icon={SearchIcon}
                    placeholder="Search anything here"
                    type="text"
                />
            </div>
            <ProfileHeaderOptions/>
        </header>
    );
  };