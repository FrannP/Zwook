import { useState } from "react";
import TextInput from "../components/textInput";
import CategoryCard from "../components/categoryCard";
import emailIcon from "../assets/emailIcon.svg";
import passwordIcon from "../assets/lock-2.svg";
import lunaNova from "../assets/lunaNova.png";
import phantomEchoes from "../assets/phantomEchoes.png";

const Header = () => (
  <div className="flex flex-col items-center gap-[20px] justify-center">
    <img className="w-[186.63px] h-[52px]" src="src/assets/logo.svg" alt="" />
    <p className="text-center font-semiBold text-xl">Welcome Back</p>
  </div>
);

const SignupPrompt = () => (
  <div className="gap-[4px] flex-row text-center text-md font-medium flex justify-center">
    <p className="text-primaryPlaceholderText_Light">
      Don’t have an account yet?
    </p>
    <a href="">Sign Up</a>
  </div>
);

const Form = ({ email, setEmail, password, setPassword, handleSubmit }) => (
  <form className="flex flex-col gap-[20px] w-full" onSubmit={handleSubmit}>
    <TextInput
      icon={emailIcon}
      placeholder="Email Address"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <TextInput
      icon={passwordIcon}
      placeholder="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button
      className="text-darkText_Light font-regular text-md h-[44px] w-full rounded-[8px] bg-warningText_Dark hover:bg-brandHoverSurface_Light transition duration-500 ease-in-out"
      type="submit"
    >
      Login
    </button>
  </form>
);

const OrSeparator = () => (
  <div className="inline-flex items-center justify-center h-[20px] w-full">
    <hr className="w-full h-px my-8 bg-gray-200 border-0 bg-primaryBorder_Dark" />
    <span className="absolute px-4 font-regular text-md text-primaryPlaceholderText_Light -translate-x-1/2 bg-secondaryBackground_Dark left-1/2">
      or
    </span>
  </div>
);

const GoogleLoginButton = () => (
  <button
    className="flex justify-center gap-[8px] border-[1px] border-primaryBorder_Dark py-[12px] px-[20px] h-[44px] w-full rounded-[8px] bg-transparent hover:bg-primaryActiveSurface_dark transition duration-500 ease-in-out"
    type="submit"
  >
    <img
      className="w-[13.53] h-[14.85]"
      src="src/assets/googleLogo.svg"
      alt=""
    />
    <span className="text-md font-regular">Authorize with Google</span>
  </button>
);

const Decorations = () => (
  <div className="absolute h-full bg-warningSurface_Dark w-[898px] right-0">
    <img src="src/assets/loginDecoOne.svg" alt="" />
    <img
      className="absolute bottom-20 right-0"
      src="src/assets/loginDecoTwo.svg"
      alt=""
    />
    <img
      className="absolute right-0 bottom-0"
      src="src\assets\Zwook -_ Dashboard.svg"
      alt=""
    />
    <CategoryCard
      image={lunaNova}
      name="Luna Nova"
      bottom="435px"
      right="82px"
    />
    <CategoryCard
      image={phantomEchoes}
      name="Phantom Echoes"
      left="129px"
      bottom="150px"
    />
  </div>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      alert("Login successful");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="absolute inset-0 bg-primaryBackground_Dark">
      <Decorations />
      <div className="flex flex-col absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 bg-secondaryBackground_Dark rounded-[16px] border-solid border-[1px] border-primaryBorder_Dark gap-[20px] p-[24px] h-[468px] w-[474px] text-primaryText_Dark">
        <div>
          <Header />
          <SignupPrompt />
        </div>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
        <OrSeparator />
        <GoogleLoginButton />
      </div>
    </div>
  );
}
