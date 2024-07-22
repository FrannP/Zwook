import React, { useState } from "react";
import checkIcon from "../assets/icons/newAlbum/check.svg";
import cloudUploadIcon from "../assets/icons/newAlbum/cloud-upload.svg";
import deleteIcon from "../assets/icons/newAlbum/delete-1.svg";

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  hoverColor,
  hoverBorder,
}) => {
  return (
    <input
      type="button"
      className={`py-[12px] px-[20px] rounded-[8px] border-solid border-[1px] ${borderColor} ${backgroundColor} ${textColor} text-mdText font-regular hover:cursor-pointer ${hoverColor} ${hoverBorder} transition duration-500 ease-in-out`}
      value={label}
    />
  );
};

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="font-medium text-smDisplay text-primaryText_Light dark:text-primaryText_Dark">
        Create New Podcast
      </h1>
      <div className="flex gap-[12px] ">
        <Button
          label="Cancel"
          textColor="dark:text-primaryText_Dark text-primaryText_Light hover:text-primaryText_Light"
          borderColor="dark:border-primaryBorder_Dark border-primaryBorder_Light"
          hoverColor="dark:hover:bg-primaryActiveSurface_Dark hover:bg-primaryActiveSurface_Light"
        />
        <Button
          label="Save"
          textColor="dark:text-darkText_Dark text-darkText_Light"
          borderColor="dark:border-warningSurface_Dark border-warningSurface_Light"
          backgroundColor="dark:bg-warningSurface_Dark bg-warningSurface_Light"
          hoverBorder="dark:hover:border-brandHoverSurface_Dark hover:border-brandHoverSurface_Light"
          hoverColor="hover:bg-brandHoverSurface_Light dark:hover:bg-brandHoverSurface_Dark"
        />
      </div>
    </header>
  );
};

const TextInput = ({ label, placeholder }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="text-mdText font-regular placeholder:text-primaryPlaceholderText_Light dark:placeholder:text-primaryPlaceholderText_Dark text-primaryPlaceholderText_Light dark:text-primaryPlaceholderText_Dark border-[1px] p-[8px] rounded-[4px] border-primaryBorder_Light dark:border-primaryBorder_Dark bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark"
      />
    </label>
  );
};

const CheckboxInput = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="flex items-center gap-[8px]">
      <div className="relative">
        <input
          type="checkbox"
          className={`appearance-none w-[16px] h-[16px] border-[1px] rounded-[4px] hover:cursor-pointer transition duration-500 ease-in-out ${
            checked
              ? "bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark"
              : "bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark border-primaryBorder_Light dark:border-primaryBorder_Dark"
          }`}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {checked && (
          <img
            src={checkIcon}
            alt="Checked"
            className="absolute left-[50%] -ml-[5px] -mt-[6.5px] top-[50%] w-[10px] h-[10px] filter invert hover:cursor-pointer"
          />
        )}
      </div>
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
    </label>
  );
};

const TextAreaInput = ({ label, placeholder }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        className="text-mdText font-regular border-[1px] p-[8px] rounded-[4px] h-[151px] placeholder:text-primaryPlaceholderText_Light dark:placeholder:text-primaryPlaceholderText_Dark text-primaryPlaceholderText_Light dark:text-primaryPlaceholderText_Dark bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark border-primaryBorder_Light dark:border-primaryBorder_Dark resize-none focus:outline-none"
      />
    </label>
  );
};

const Form = () => {
  return (
    <form className="w-[1043px] flex flex-col gap-[20px] bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark rounded-[16px] border-[1px] border-primaryLighterBorder_Light dark:border-primaryLighterBorder_Dark p-[24px]">
      <TextInput label="Title" placeholder="Enter station title" />
      <TextInput label="Description link" placeholder="Enter website URL" />
      <TextAreaInput
        label="Description"
        placeholder="Enter station description"
      />
      <CheckboxInput label="Status" />
      <CheckboxInput label="Premium" />
      <CheckboxInput label="Make Default" />
      <CheckboxInput label="Visible on the Portal" />
    </form>
  );
};

const ImageUploadSection = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const uploadedFile = URL.createObjectURL(event.target.files[0]);
    setFile(uploadedFile);
  };

  return (
    <section className="h-full flex justify-center items-center border-[1px] rounded-[8px] border-primaryBorder_Light dark:border-primaryBorder_Dark bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark">
      {file ? (
        <div className="relative">
          <img
            src={file}
            alt="Uploaded file"
            className="max-w-full h-auto rounded-[4px]"
          />
          <button
            onClick={() => setFile(null)}
            className="absolute top-[8px] right-[8px] w-[32px] h-[32px] rounded-[8px] bg-errorSurface_Light dark:bg-errorSurface_Dark text-white p-[8px]"
          >
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-[8px]">
          <div className="border-[1px] p-[8px] rounded-[4px] border-primaryBorder_Light dark:border-primaryBorder_Dark">
            <img src={cloudUploadIcon} alt="Cloud upload" />
          </div>
          <div>
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-brandText_Light dark:text-brandText_Dark mr-[5px] font-medium text-mdText"
            >
              Click to upload
            </label>
            <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
              or drag and drop
            </span>
          </div>
          <div className="flex justify-center font-regular text-mdText text-secondaryText_Light dark:text-secondaryText_Dark">
            SVG, PNG, JPEG, TIFF, or GIF
          </div>
          <input
            id="file-upload"
            type="file"
            accept=".svg, .png, .jpeg, .jpg, .tiff, .gif"
            className="hidden"
            onChange={handleChange}
          />
        </div>
      )}
    </section>
  );
};

const UploadImageButton = () => {
  return (
    <>
      <label
        htmlFor="file-upload"
        className="text-center py-[12px] px-[20px] rounded-[8px] border-solid border-[1px] text-mdText font-regular hover:cursor-pointer transition duration-500 ease-in-out dark:text-darkText_Dark text-darkText_Light border-warningSurface_Light dark:border-warningSurface_Dark dark:bg-warningSurface_Dark bg-warningSurface_Light dark:hover:border-brandHoverSurface_Dark hover:border-brandHoverSurface_Light dark:hover:bg-brandHoverSurface_Dark hover:bg-brandHoverSurface_Light"
      >
        Upload Image
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".svg, .png, .jpeg, .jpg, .tiff, .gif"
        className="hidden"
      />
    </>
  );
};

const ImageForm = () => {
  return (
    <form className="w-[489px] flex flex-col gap-[20px] bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark rounded-[16px] border-[1px] border-primaryLighterBorder_Light dark:border-primaryLighterBorder_Dark p-[24px]">
      <ImageUploadSection />
      <UploadImageButton />
    </form>
  );
};

const FormSection = () => {
  return (
    <section className="flex gap-[20px]">
      <Form />
      <ImageForm />
    </section>
  );
};

export default function addNewAlbumContent() {
  return (
    <div className="flex flex-col gap-[36px]">
      <Header />
      <FormSection />
    </div>
  );
}
