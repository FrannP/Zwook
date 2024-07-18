export default function TextInput({
  placeholder,
  type,
  value,
  onChange,
  icon,
}) {
  return (
    <div className="relative">
      <img
        src={icon}
        alt="icon"
        className={` absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 `}
      />
      <input
        className="rounded-[8px] bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark h-[44px] w-full border-solid border-[1px] border-primaryBorder_Light dark:border-primaryBorder_Dark pl-10 placeholder-primaryPlaceholderText_Dark font-regular text-mdText text-primaryText_Dark "
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
