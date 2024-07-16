import React from "react";

const Button = ({ label, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`py-[12px] px-[20px]  rounded-[8px] border-solid border-[1px] ${borderColor} ${backgroundColor} ${textColor} text-mdText font-regular`}
    >
      {label}
    </button>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="font-medium text-smDisplay">Create New Podcast</h1>
      <div className="flex gap-[12px]">
        <Button label="Cancel" borderColor={"border-primaryBorder_Dark"} />
        <Button
          label="Save"
          textColor={"text-darkText_Dark"}
          borderColor={"border-warningSurface_Dark"}
          backgroundColor={"bg-warningSurface_Dark"}
        />
      </div>
    </header>
  );
};

export default function addNewAlbumContent() {
  return (
    <div>
      <Header />
      <section></section>
    </div>
  );
}
