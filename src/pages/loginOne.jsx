import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/textInput";
import CategoryCard from "../components/categoryCard";
import emailIcon from "../assets/icons/emailIcon.svg";
import passwordIcon from "../assets/icons/lock-2.svg";
import lunaNova from "../assets/lunaNova.png";
import phantomEchoes from "../assets/phantomEchoes.png";

const Header = () => (
  <div className="flex flex-col items-center gap-[20px] justify-center">
    <img className="w-[186.63px] h-[52px]" src="src/assets/logo.svg" alt="" />
  </div>
);

const SignupPrompt = () => (
  <div className=" flex-col gap-[4px] text-center text-mdText font-medium flex justify-center">
    <p className="text-center font-semiBold text-xlText">Welcome Back</p>
    <div className="flex gap-[4px] justify-center">
      <p className="text-primaryPlaceholderText_Light dark:text-primaryPlaceholderText_Dark text-mdText font-regular">
        Don’t have an account yet?
      </p>
      <a className="text-mdText font-medium" href="">
        Sign Up
      </a>
    </div>
  </div>
);

const Form = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  emailError,
  passwordError,
  emailErrorMessage,
  passwordErrorMessage,
}) => (
  <form className="flex flex-col gap-[20px] w-full" onSubmit={handleSubmit}>
    <TextInput
      icon={emailIcon}
      placeholder="Email Address"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={emailError}
      errorMessage={emailErrorMessage}
    />
    <TextInput
      icon={passwordIcon}
      placeholder="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      error={passwordError}
      errorMessage={passwordErrorMessage}
    />
    <button
      className="text-darkText_Light dark:text-darkText_Light font-regular text-mdText h-[44px] w-full rounded-[8px] bg-warningText_Dark dark:bg-warningText_Dark hover:bg-brandHoverSurface_Light transition duration-500 ease-in-out"
      type="submit"
    >
      Login
    </button>
  </form>
);

const OrSeparator = () => (
  <div className="inline-flex items-center justify-center h-[20px] w-full">
    <hr className="w-full h-px my-8 bg-gray-200 border-0 bg-primaryBorder_Light dark:bg-primaryBorder_Dark" />
    <span className="absolute px-4 font-regular text-mdText text-primaryPlaceholderText_Light dark:text-primaryPlaceholderText_Dark -translate-x-1/2 bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark left-1/2">
      or
    </span>
  </div>
);

const GoogleLoginButton = () => (
  <button
    className="flex justify-center items-center gap-[8px] border-[1px] border-primaryBorder_Light dark:border-primaryBorder_Dark py-[12px] px-[20px] h-[44px] w-full rounded-[8px] bg-transparent dark:hover:bg-primaryActiveSurface_dark transition hover:bg-primaryActiveSurface_Light duration-500 ease-in-out"
    type="submit"
  >
    <img
      className="w-[13.53] h-[14.85]"
      src="src/assets/icons/googleLogo.svg"
      alt=""
    />
    <span className="text-mdText font-regular">Authorize with Google</span>
  </button>
);

const Decorations = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateMode = (e) => {
      setIsDarkMode(e.matches);
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
    };
  }, []);

  return (
    <div className="absolute h-full bg-warningSurface_Light dark:bg-warningSurface_Dark w-[898px] right-0">
      <img src="src/assets/loginDecoOne.svg" alt="" />
      <img
        className="absolute bottom-20 right-0"
        src="src/assets/loginDecoTwo.svg"
        alt=""
      />
      <img
        className="absolute right-0 bottom-0"
        src={
          isDarkMode
            ? "src/assets/Zwook-Dashboard-Dark.svg"
            : "src/assets/Zwook-Dashboard-Light.svg"
        }
        alt=""
      />
      <div className="bottom-[435px] right-[82px] absolute">
        <CategoryCard image={lunaNova} name="Luna Nova" />
      </div>
      <div className="left-[129px] bottom-[150px] absolute">
        <CategoryCard image={phantomEchoes} name="Phantom Echoes" />
      </div>
    </div>
  );
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email || !password) {
      setEmailError(!email);
      setPasswordError(!password);
      setEmailErrorMessage(!email ? "Validation error" : "");
      setPasswordErrorMessage(!password ? "Validation error" : "");
      setError("Both fields are required");
      hasError = true;
    } else {
      setEmailError(false);
      setPasswordError(false);
      setEmailErrorMessage("");
      setPasswordErrorMessage("");

      if (email !== "albert@flores.com") {
        setEmailError(true);
        setEmailErrorMessage("Validation error");
        hasError = true;
      }

      if (password !== "1234") {
        setPasswordError(true);
        setPasswordErrorMessage("Validation error");
        hasError = true;
      }

      if (!hasError) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="absolute inset-0 bg-primaryBackground_Light  dark:bg-primaryBackground_Dark">
      <Decorations />
      <div className="flex flex-col absolute top-1/2 left-[274px] transform -translate-y-1/2 bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark rounded-[16px] border-solid border-[1px] border-primaryBorder_Light dark:border-primaryBorder_Dark gap-[20px] p-[24px] h-[468px] w-[474px] text-primaryText_Light dark:text-primaryText_Dark">
        <div className="flex flex-col gap-[20px]">
          <Header />
          <SignupPrompt />
        </div>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          emailError={emailError}
          passwordError={passwordError}
          emailErrorMessage={emailErrorMessage}
          passwordErrorMessage={passwordErrorMessage}
        />
        <OrSeparator />
        <GoogleLoginButton />
      </div>
    </div>
  );
}
