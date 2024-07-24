import warningIcon from "../assets/icons/login/warning.svg";

export default function TextInput({
  placeholder,
  type,
  value,
  onChange,
  icon,
  error,
  errorMessage,
}) {
  return (
    <div className="relative">
      {error && errorMessage && (
        <div className="items-center flex gap-[4px] absolute top-[-18px] text-errorBorder_Light dark:text-errorBorder_Dark font-medium text-smText h-[16px]">
          <img className="w-[12px] h-[12px]" src={warningIcon} alt="" />
          {errorMessage}
        </div>
      )}
      <img
        src={icon}
        alt="icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
      />
      <input
        className={`rounded-[8px] bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark h-[44px] w-full border-solid border-[1px] ${
          error
            ? "border-errorBorder_Light dark:border-errorBorder_Dark"
            : "border-primaryBorder_Light dark:border-primaryBorder_Dark"
        } pl-10 placeholder-primaryPlaceholderText_Light dark:placeholder-primaryPlaceholderText_Dark font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
