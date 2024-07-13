import TextInput from "./textInput";
import SearchIcon from "../assets/icons/searchIcon.svg"

const Avatar = () =>(
    <div className="flex gap-[8px]">
        <div className="relative">
            <img className="w-[40px] h-[40px]" src="src/assets/avatarImage.png" alt="Avatar" />
            <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-successText_Light rounded-full border-[1px] border-primarySurface_Dark"></div>
        </div>
        <div >
            <h3 className="font-semiBold text-md ">Albert Flores</h3>
            <div className="text-primaryPlaceholderText_Dark font-medium text-sm">
                albert@flores.com
            </div>
        </div>
    </div>
);

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
                <Avatar/>
                <button>
                    <img src="src\assets\icons\headerButtonThree.svg" alt="" />
                </button>
            </div>
        </div>
  );

export default function Header() {
    return (
        <header className="px-[24px] py-[12px] flex border-b-[1px]  border-primaryLighterBorder_Dark justify-between">
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