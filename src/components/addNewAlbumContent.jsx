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
      className={`py-[12px] px-[20px] rounded-[8px] border-solid border-[1px]  ${borderColor} ${backgroundColor} ${textColor} text-mdText font-regular hover:cursor-pointer ${hoverColor} ${hoverBorder} transition duration-500 ease-in-out`}
      value={label}
    />
  );
};

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="font-medium text-smDisplay ">Create New Podcast</h1>
      <div className="flex gap-[12px] ">
        <Button
          label="Cancel"
          borderColor="border-primaryBorder_Dark"
          hoverColor="hover:bg-primaryActiveSurface_dark"
        />
        <Button
          label="Save"
          textColor="text-darkText_Dark"
          borderColor="border-warningSurface_Dark"
          backgroundColor="bg-warningSurface_Dark"
          hoverBorder="hover:border-brandHoverSurface_dark"
          hoverColor="hover:bg-brandHoverSurface_dark"
        />
      </div>
    </header>
  );
};

const TextInput = ({ label, placeholder }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="border-[1px] p-[8px] rounded-[4px] border-primaryBorder_Dark bg-secondaryBackground_Dark"
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
          className="appearance-none w-[16px] h-[16px] border-[1px] bg-secondaryBackground_Dark border-primaryBorder_Dark rounded-[4px] hover:border-brandBorder_Dark hover:bg-brandActiveSurface_Dark hover:cursor-pointer transition duration-500 ease-in-out"
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
      <span className="font-regular text-mdText">{label}</span>
    </label>
  );
};

const TextAreaInput = ({ label, placeholder }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText">{label}</span>
      <textarea
        placeholder={placeholder}
        className="border-[1px] p-[8px] rounded-[4px] h-[151px] bg-secondaryBackground_Dark border-primaryBorder_Dark resize-none focus:outline-none"
      />
    </label>
  );
};

const Form = () => {
  return (
    <form className="w-[1043px] flex flex-col gap-[20px] bg-secondaryBackground_Dark rounded-[16px] border-[1px] border-primaryLighterBorder_Dark p-[24px]">
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
    <section className="h-full flex justify-center items-center border-[1px] rounded-[8px] border-primaryBorder_Dark bg-secondaryBackground_Dark">
      {file ? (
        <div className="relative">
          <img
            src={file}
            alt="Uploaded file"
            className="max-w-full h-auto rounded-[4px]"
          />
          <button
            onClick={() => setFile(null)}
            className="absolute top-[8px] right-[8px] w-[32px] h-[32px] rounded-[8px] bg-errorSurface_Dark text-white p-[8px]"
          >
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-[8px]">
          <div className="border-[1px] p-[8px] rounded-[4px] border-primaryBorder_Dark">
            <img src={cloudUploadIcon} alt="Cloud upload" />
          </div>
          <div>
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-brandText_Dark mr-[5px] font-medium text-mdText"
            >
              Click to upload
            </label>
            <span className="font-regular text-mdText">or drag and drop</span>
          </div>
          <div className="flex justify-center font-regular text-mdText">
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

const ImageForm = () => {
  return (
    <form className="w-[489px] flex flex-col gap-[20px] bg-secondaryBackground_Dark rounded-[16px] border-[1px] border-primaryLighterBorder_Dark p-[24px]">
      <ImageUploadSection />
      <Button
        label="Upload Image"
        textColor="text-darkText_Dark"
        borderColor="border-warningSurface_Dark"
        backgroundColor="bg-warningSurface_Dark"
        hoverBorder="hover:border-brandHoverSurface_dark"
        hoverColor="hover:bg-brandHoverSurface_dark"
      />
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
